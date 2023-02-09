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
		<div class="callout secondary cell small-4 text-center">
			<h2 class="padding cursive"><Link class="cursive" to={`/board-games/${id}`}>{name}</Link></h2>
			<p class="bold italics less-padding">Estimated Play Time: {estimatedPlayTime} minutes</p>
			<p class="bold italics less-padding">Players: {players}</p>
		</div>
	)
}

export default BoardGameTile