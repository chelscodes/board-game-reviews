import React from "react"
import { Link } from "react-router-dom"

const BoardGameTile = props => {
	const { id, name } = props
	return(
		<>
			<li><Link to={`/board-games/${id}`}>{name}</Link></li>
		</>
	)
}

export default BoardGameTile