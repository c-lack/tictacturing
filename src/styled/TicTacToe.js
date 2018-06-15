import React from 'react'
import {Layer, Line, Text} from 'react-konva'

export const Board = ({unit, size, rows, activeBox}) => {
	let grid = []
	let stroke = 'Gainsboro'
  let strokeAlt = 'DarkGrey'
  let strokeActive = 'DimGray'
	let strokeWidth = 10
  // Minor lines
	for (let i = 1; i < rows; i++) {
    if ((i % 3) === 0) {
      continue
    }
		let position = unit * i
		grid.push(
			<Line
				points={[position, 0, position, size]}
				stroke={stroke}
				strokeWidth={strokeWidth}
				key={i+'v'}
        zindex={1000}
			/>
		)
		grid.push(
			<Line
				points={[0, position, size, position]}
        stroke={stroke}
				strokeWidth={strokeWidth}
				key={i+'h'}
			/>
		)
	}
  // Major lines
  for (let i = 1; i < rows; i++) {
    if ((i % 3) !== 0) {
      continue
    }
    let position = unit * i
    grid.push(
      <Line
        points={[position, 0, position, size]}
        stroke={strokeAlt}
        strokeWidth={strokeWidth}
        key={i+'v'}
        zindex={1000}
      />
    )
    grid.push(
      <Line
        points={[0, position, size, position]}
        stroke={strokeAlt}
        strokeWidth={strokeWidth}
        key={i+'h'}
      />
    )
  }
  // Highlight active box
  if (activeBox) {
    switch (activeBox) {
      case 1:
        grid.push(
          <Line
            points={[0,3*unit,3*unit,3*unit]}
            stroke={strokeActive}
            strokeWidth={strokeWidth}
            key={'ah'}
            lineCap={'round'}
          />
        )
        grid.push(
          <Line
            points={[3*unit,0,3*unit,3*unit]}
            stroke={strokeActive}
            strokeWidth={strokeWidth}
            key={'av'}
            lineCap={'round'}
          />
        )
        break
      case 2:
        grid.push(
          <Line
            points={[3*unit,3*unit,6*unit,3*unit]}
            stroke={strokeActive}
            strokeWidth={strokeWidth}
            key={'ah'}
            lineCap={'round'}
          />
        )
        grid.push(
          <Line
            points={[3*unit,0,3*unit,3*unit]}
            stroke={strokeActive}
            strokeWidth={strokeWidth}
            key={'av1'}
            lineCap={'round'}
          />
        )
        grid.push(
          <Line
            points={[6*unit,0,6*unit,3*unit]}
            stroke={strokeActive}
            strokeWidth={strokeWidth}
            key={'av2'}
            lineCap={'round'}
          />
        )
        break
      case 3:
        grid.push(
          <Line
            points={[6*unit,3*unit,9*unit,3*unit]}
            stroke={strokeActive}
            strokeWidth={strokeWidth}
            key={'ah'}
            lineCap={'round'}
          />
        )
        grid.push(
          <Line
            points={[6*unit,0,6*unit,3*unit]}
            stroke={strokeActive}
            strokeWidth={strokeWidth}
            key={'av'}
            lineCap={'round'}
          />
        )
        break
      case 4:
        grid.push(
          <Line
            points={[0,3*unit,3*unit,3*unit]}
            stroke={strokeActive}
            strokeWidth={strokeWidth}
            key={'ah1'}
            lineCap={'round'}
          />
        )
        grid.push(
          <Line
            points={[0,6*unit,3*unit,6*unit]}
            stroke={strokeActive}
            strokeWidth={strokeWidth}
            key={'ah2'}
            lineCap={'round'}
          />
        )
        grid.push(
          <Line
            points={[3*unit,3*unit,3*unit,6*unit]}
            stroke={strokeActive}
            strokeWidth={strokeWidth}
            key={'av'}
            lineCap={'round'}
          />
        )
        break
      case 5:
        grid.push(
          <Line
            points={[3*unit,3*unit,6*unit,3*unit]}
            stroke={strokeActive}
            strokeWidth={strokeWidth}
            key={'ah1'}
            lineCap={'round'}
          />
        )
        grid.push(
          <Line
            points={[3*unit,6*unit,6*unit,6*unit]}
            stroke={strokeActive}
            strokeWidth={strokeWidth}
            key={'ah2'}
            lineCap={'round'}
          />
        )
        grid.push(
          <Line
            points={[3*unit,3*unit,3*unit,6*unit]}
            stroke={strokeActive}
            strokeWidth={strokeWidth}
            key={'av1'}
            lineCap={'round'}
          />
        )
        grid.push(
          <Line
            points={[6*unit,3*unit,6*unit,6*unit]}
            stroke={strokeActive}
            strokeWidth={strokeWidth}
            key={'av2'}
            lineCap={'round'}
          />
        )
        break
      case 6:
        grid.push(
          <Line
            points={[6*unit,3*unit,9*unit,3*unit]}
            stroke={strokeActive}
            strokeWidth={strokeWidth}
            key={'ah1'}
            lineCap={'round'}
          />
        )
        grid.push(
          <Line
            points={[6*unit,6*unit,9*unit,6*unit]}
            stroke={strokeActive}
            strokeWidth={strokeWidth}
            key={'ah2'}
            lineCap={'round'}
          />
        )
        grid.push(
          <Line
            points={[6*unit,3*unit,6*unit,6*unit]}
            stroke={strokeActive}
            strokeWidth={strokeWidth}
            key={'av'}
            lineCap={'round'}
          />
        )
        break
      case 7:
        grid.push(
          <Line
            points={[0,6*unit,3*unit,6*unit]}
            stroke={strokeActive}
            strokeWidth={strokeWidth}
            key={'ah'}
            lineCap={'round'}
          />
        )
        grid.push(
          <Line
            points={[3*unit,6*unit,3*unit,9*unit]}
            stroke={strokeActive}
            strokeWidth={strokeWidth}
            key={'av'}
            lineCap={'round'}
          />
        )
        break
      case 8:
        grid.push(
          <Line
            points={[3*unit,6*unit,3*unit,9*unit]}
            stroke={strokeActive}
            strokeWidth={strokeWidth}
            key={'av1'}
            lineCap={'round'}
          />
        )
        grid.push(
          <Line
            points={[6*unit,6*unit,6*unit,9*unit]}
            stroke={strokeActive}
            strokeWidth={strokeWidth}
            key={'av2'}
            lineCap={'round'}
          />
        )
        grid.push(
          <Line
            points={[3*unit,6*unit,6*unit,6*unit]}
            stroke={strokeActive}
            strokeWidth={strokeWidth}
            key={'ah'}
            lineCap={'round'}
          />
        )
        break
      case 9:
        grid.push(
          <Line
            points={[6*unit,6*unit,9*unit,6*unit]}
            stroke={strokeActive}
            strokeWidth={strokeWidth}
            key={'ah'}
            lineCap={'round'}
          />
        )
        grid.push(
          <Line
            points={[6*unit,6*unit,6*unit,9*unit]}
            stroke={strokeActive}
            strokeWidth={strokeWidth}
            key={'av'}
            lineCap={'round'}
          />
        )
        break
      default:

    }
  }
	return (
		<Layer>
			{grid}
		</Layer>
	)
}

export const Squares = ({
  unit,
  coordinates,
  gameState,
  win,
  gameOver,
  yourTurn,
  ownMark,
  move,
  prevMove
}) => {

  let squares = coordinates.map( (position, index) => {
      let makeMove = move
      let mark = gameState[index]
      let fill = 'DarkGrey'
      let altFill = 'DimGray'
      if (gameOver || !yourTurn || mark) {
        makeMove = () => {}
      }
      return (
        <Text
          key={index}
          index={index}
          x={position[0]}
          y={position[1]}
          fontSize={unit}
          width={unit}
          text={mark}
          fill={(index === prevMove) ? altFill : fill}
          fontFamily={'Helvetica'}
          align={'center'}
          onClick={(evt) => {
            let index = evt.target.index
            makeMove(index, ownMark)
          }}
        />
      )
  })

  return (
    <Layer>
      {squares}
    </Layer>
  )
}
