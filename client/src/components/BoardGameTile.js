import React from "react"
import { Link } from "react-router-dom"

const BoardGameTile = props => {
    const { id, name, rating } = props
    return(
        <div>
            <li><Link to={`/boardgames/${id}`}>{name}</Link></li>
            <p>Rating: {rating}/10</p>
        </div>
    )
}

export default BoardGameTile