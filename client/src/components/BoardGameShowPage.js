import React, { useState, useEffect } from "react";
import ReviewsList from "./ReviewsList";

const BoardGameShowPage = (props) => {
	const [boardGame, setBoardGame] = useState({
		name: "",
		minPlayers: "",
		maxPlayers: "",
		estimatedPlayTime: "",
		description: ""
	})
	const id = props.match.params.id 

	const getBoardGame = async () => {

		try {
			const response = await fetch(`/api/v1/board-games/${id}`)
			if(!response.ok){
				const errorMessage = `${response.status} (${response.statusText})`
				const error = new Error(errorMessage)
				throw(error)
			}
			const body = await response.json()
			setBoardGame(body.boardGame)
		} catch (error) {
			console.error(`Error in fetch: ${error.message}`)
		}
	}

	useEffect(() => {
		getBoardGame()
	}, [])

	let playerRange

	if (boardGame.minPlayers === boardGame.maxPlayers) {
		playerRange = `${boardGame.minPlayers}`
	} else {
		playerRange = `${boardGame.minPlayers} - ${boardGame.maxPlayers}`
	}

	return(
		<>
			<div className="game-info">
				<div className="row column text-center">
					<h2>{boardGame.name}</h2>
					<div className="grid-x grid-padding-x">
						<p className="cell auto text-right">Players: {playerRange}</p>
						<p className="cell auto text-left">Time: {boardGame.estimatedPlayTime} minutes</p>
					</div>
					<p className="description">{boardGame.description}</p>
				</div>
			</div>
			<ReviewsList boardGameId={id}/>
		</>
	)
}

export default BoardGameShowPage