import React, { useState, useEffect } from "react";
import ReviewForm from "./ReviewForm"

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
			<h2>{boardGame.name}</h2>
			<ul className="game-info">
				<li>Players: {playerRange}</li>
				<li>Est Play Time: {boardGame.estimatedPlayTime} minutes</li>
			</ul>
			<div className="description">
				<p>Description:</p>
				<p>{boardGame.description}</p>
			</div>
			<ReviewForm boardGameId={id} />
		</>
	)
}

export default BoardGameShowPage