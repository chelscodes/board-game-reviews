import React from "react"
import { Link } from "react-router-dom"

const BoardGameTile = props => {
	const { id, name, minPlayers, maxPlayers, estimatedPlayTime, description } = props

	let players = ''
	if (minPlayers === maxPlayers) {
		players = `${maxPlayers}`
	} else {
		players = `${minPlayers} - ${maxPlayers}`
	}
	return(
		<div className="callout cell large-4 medium-6 small-12 text-center game-tile">
			<h3 className="game-tile_header"><Link to={`/board-games/${id}`}>{name}</Link></h3>
			<p className="game-tile_body">Estimated Play Time: {estimatedPlayTime} minutes</p>
			<p className="game-tile_body">Players: {players}</p>
		</div>
	)
}

export default BoardGameTile