import React, {Component} from 'react'
import {Stage} from 'react-konva'
import {Board, Squares} from '../styled/TicTacToe'

import {
  getRandomMove,
  updateGame,
} from '../utils/gameLogic'

class TicTacToe extends Component {

  state = {
    rows: 9,
    gameState: new Array(81).fill(false),
    ownMark: 'X',
    otherMark: 'O',
    gameOver: false,
    yourTurn: true,
    prevMove: false,
    activeBox: false
  }

  componentWillMount() {
    this.resize()
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize)
  }

  resize = () => {
    let height = window.innerHeight
    let width = window.innerWidth
    let size = (height < width) ? height * .8 : width * .8
    let rows = this.state.rows
    let unit = size / rows
    let coordinates = []
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < rows; x++) {
        coordinates.push([x*unit,y*unit])
      }
    }

    this.setState({
      size,
      rows,
      unit,
      coordinates
    })
  }

  move = (index, marker) => {
    this.setState( (prevState, props) => {
      return updateGame(index, marker, prevState)
    },() => {
      let {yourTurn, prevMove, gameState, gameOver} = this.state
      if (!yourTurn && !gameOver) {
        this.makeAiMove(prevMove, gameState)
      }
    })
  }

  makeAiMove = (prevMove, gameState) => {
    setTimeout(() => {
      this.move(getRandomMove(prevMove,gameState), this.state.otherMark)
    },10)
  }

  render() {
    let {
      size,
      unit,
      rows,
      coordinates,
      gameState,
      win,
      gameOver,
      yourTurn,
      ownMark,
      prevMove,
      activeBox
    } = this.state
    return (
      <div>
        <Stage
          width={size}
          height={size}
        >
          <Board
            unit={unit}
            rows={rows}
            size={size}
            activeBox={activeBox}
          />
          <Squares
            unit={unit}
            coordinates={coordinates}
            gameState={gameState}
            win={win}
            gameOver={gameOver}
            yourTurn={yourTurn}
            ownMark={ownMark}
            move={this.move}
            prevMove={prevMove}
          />
        </Stage>
      </div>
    )
  }
}

export default TicTacToe
