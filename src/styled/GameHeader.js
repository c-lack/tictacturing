import React from 'react'
import styled from 'styled-components'
import {media} from '../utils/media'
import FlatButton from 'material-ui/FlatButton';

const Header = styled.header`
	display: flex;
	margin: auto;
	width: 80%;
	${media.handheld`
		width: 100%;
	`}
	font-size: 14px;
	font-weight: 500;
	font-family: 'Roboto', sans-serif;
	text-transform: uppercase;
`

const Title = styled.div`
	margin-right: auto;
	margin-top: auto;
	margin-bottom: auto;
`

const GameInfo = styled.div`
	font-family: 'Roboto', sans-serif;
	display: flex;
	width: 80%;
	${media.handheld`
		width: 100%;
	`}
	margin: auto;
	padding-top: 10px;
	padding-bottom: 10px;
`

export const GameHeader = (props) => {
	let {ownMark, yourTurn, gameOver, resetGame} = props
  return (
		<div>
	    <Header>
				<Title>
					Tic Tac Toe
				</Title>
				<FlatButton
					label="New game"
					backgroundColor="Gainsboro"
					onClick={resetGame}
				/>
	    </Header>
			<GameInfo>
					<Title>You are {ownMark}</Title>
					<div>{gameOver ? `${gameOver} wins` : (yourTurn ? 'Your turn' : 'Opponents turn')}</div>
			</GameInfo>
		</div>
  )
}
