// Returns the indices corresponding to the active box
export const getActiveBox = (prevMove) => {
  let map2box1 = [0,3,6,27,30,33,54,57,60]
  let box1 = [0,1,2,9,10,11,18,19,20]
  if (map2box1.includes(prevMove)) {
    return box1
  }

  let map2box2 = map2box1.map(x => x+1)
  let box2 = box1.map(x => x+3)
  if (map2box2.includes(prevMove)) {
    return box2
  }

  let map2box3 = map2box2.map(x => x+1)
  let box3 = box2.map(x => x+3)
  if (map2box3.includes(prevMove)) {
    return box3
  }

  let map2box4 = map2box1.map(x => x+9)
  let box4 = box1.map(x => x+27)
  if (map2box4.includes(prevMove)) {
    return box4
  }

  let map2box5 = map2box4.map(x => x+1)
  let box5 = box4.map(x => x+3)
  if (map2box5.includes(prevMove)) {
    return box5
  }

  let map2box6 = map2box5.map(x => x+1)
  let box6 = box5.map(x => x+3)
  if (map2box6.includes(prevMove)) {
    return box6
  }

  let map2box7 = map2box4.map(x => x+9)
  let box7 = box4.map(x => x+27)
  if (map2box7.includes(prevMove)) {
    return box7
  }

  let map2box8 = map2box7.map(x => x+1)
  let box8 = box7.map(x => x+3)
  if (map2box8.includes(prevMove)) {
    return box8
  }

  let box9 = box8.map(x => x+3)
  return box9
}

// Returns the indices of legal moves
export const getOpenSquares = (prevMove, gameState) => {
  let activeBox = getActiveBox(prevMove)
  let openSquares = []
  activeBox.forEach( (idx) => {
    if (!gameState[idx]) {
      openSquares.push(idx)
    }
  })
  if (openSquares.length === 0) {
    gameState.forEach( (square, idx) => {
      if (!square) {
        openSquares.push(idx)
      }
    })
  }
  return openSquares
}

// Returns a random int between min and max inclusive
const random = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max-min)) + min
}

// Returns a random legal move
export const getRandomMove = (prevMove, gameState) => {
  let openSquares = getOpenSquares(prevMove, gameState)
  return openSquares[random(0,openSquares.length)]
}

// Checks if proposed move is valid
const validMove = (index, prevMove, gameState) => {
  // First move is always valid
  if (!prevMove) {
    return true
  }
  // Get valid squares
  let validMoves = getOpenSquares(prevMove, gameState)
  if (validMoves.includes(index)) {
    return true
  } else {
    return false
  }
}

// Define winning indices
const combos = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]

// Check if any squares are completed
const completedSquares = (gameState) => {
  [0,1,2,9,10,11,18,19,20].forEach( (idx) => {
    let box = getActiveBox(idx)
    let vals = box.map( i => gameState[i])
    let test = combos.find( (combo) => {
      let [a,b,c] = combo
      return (vals[a] === vals[b] && vals[b] === vals[c] && vals[a])
    })
    if (test) {
      box.forEach( (i) => {
        gameState[i] = vals[test[0]]
      })
    }
  })

  return gameState
}

// Check if game is over
const gameOverCheck = (gameState) => {
  let macroGame = new Array(9).fill(false);

  [0,1,2,9,10,11,18,19,20].forEach( (idx, index) => {
    let vals = getActiveBox(idx).map( i => gameState[i])
    let unique = vals.filter((v, i, a) => a.indexOf(v) === i)
    if (unique.length === 1 && unique[0]) {
      macroGame[index] = unique[0]
    }
  })

  let test = combos.find( (combo) => {
    let [a,b,c] = combo
    return (macroGame[a] === macroGame[b]
      && macroGame[b] === macroGame[c] && macroGame[a])
  })

  if (test) {
    return macroGame[test[0]]
  } else {
    return false
  }
}

// Updates the state of the game
export const updateGame = (index, marker, prevState) => {
  // Unpack prevState
  let { gameState, prevMove, yourTurn } = prevState

  // If move is not valid, do nothing
  if (!validMove(index, prevMove, gameState)) {
    return {}
  }

  // Update gameState
  gameState.splice(index, 1, marker)

  // Update turn
  yourTurn = !yourTurn

  // Check for completed squares
  gameState = completedSquares(gameState)

  // Check for game over
  let gameOver = gameOverCheck(gameState)

  // Set whether there is an active box or not
  let activeBox = getActiveBox(index)
  let gameBox = activeBox.map(idx => gameState[idx])
  if (!gameBox.includes(false)) {
    activeBox = false
  }

  return {gameState, yourTurn, activeBox, prevMove: index, gameOver}
}
