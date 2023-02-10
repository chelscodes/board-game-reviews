import React, { useEffect, useState } from "react"

import BoardGameTile from "./BoardGameTile.js"

const BoardGamesIndex = props => {
	const [boardGames, setBoardGames] = useState([])

	const getBoardGames = async () => {
		try {
			const response = await fetch("/api/v1/board-games")
			if (!response.ok) {
				const errorMessage = `${response.status} (${response.statusText})`
				const error = new Error(errorMessage)
				throw(error)
			}
			const boardGameData = await response.json()
			setBoardGames(boardGameData.boardGames)
		} catch(err) {
			console.error(`Error in fetch: ${err.message}`)
		}
	}

	useEffect(() => {
		getBoardGames()
	}, [])

	const boardGameTiles = boardGames.map(boardGame => {
		return(
			<BoardGameTile
				key={boardGame.id}
				id={boardGame.id}
				name={boardGame.name}
				minPlayers={boardGame.minPlayers}
				maxPlayers={boardGame.maxPlayers}
				estimatedPlayTime={boardGame.estimatedPlayTime}
			/>
		)
	})

	return(
		<div className="grid-container text-center">
				<h1 className="text-center header">Totally Board</h1>
				<hr />
				<p className="subtitle">Take a Trip Down Memory Lane with Our Retro Board Game Review Site - Your Guide to Timeless Gaming Fun! Explore the classic games of yesteryear and rediscover the joys of simple, yet thrilling, gameplay. So, put down the controller and pick up the dice - your next great adventure awaits!"</p>
				<hr />
				<div className="grid-x grid-margin-x">
					{boardGameTiles}
				</div>
		</div>
	)
}

export default BoardGamesIndex