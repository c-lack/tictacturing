import React, {Component} from 'react'

class TicTacToe extends Component {

  submitGame() {
    let {gameOver, ownMark, moves} = this.state
    let game = {
      won: (gameOver === ownMark) ? true : false,
      moves: moves.map( move => {
        return {
          prevMove: move.prevMove,
          move: move.move,
          gameState: move.gameState.map( gs => {
            if (gs === false) {
              return 0
            } else if (gs === ownMark) {
              return 1
            } else {
              return -1
            }
          })
        }
      }),
      date: new Date()
    }

    Meteor.call('insertGame', game, (err) => {
      if (err) {
        alert('Error: ' + err.reason)
      } else {
        console.log('Game inserted');
      }
    })
  }

  render() {
    return (
      <h1>TicTacToe</h1>
    )
  }
}

export default TicTacToe
