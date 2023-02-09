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
				description={boardGame.description}
			/>
		)
	})

	return(
		<>
		<div class="grid-container text-center">
				<h1 class="text-center header border"> *** Totally Board Reviews *** </h1>
				{/* <h3>Click on any board game for more information</h3> */}
				<div class="grid-x grid-margin-x">
					{boardGameTiles}
				</div>
		</div>
		</>
	)
}

export default BoardGamesIndex