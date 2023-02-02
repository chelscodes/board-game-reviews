import React from "react"
import { Link } from "react-router-dom"

const BoardGameTile = props => {
    const { id, name, rating } = props
    return(
        <div>
            <li><Link to={`/board-games/${id}`}>{name}</Link></li>
        </div>
    )
}

export default BoardGameTile