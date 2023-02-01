import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

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
                rating={boardGame.rating}
            />
        )
    })

    return(
        <>
            <h1>Board Game Reviews</h1>
            <ul className="boardGames">
                {boardGameTiles}
            </ul>
        </>
    )
}

export default BoardGamesIndex