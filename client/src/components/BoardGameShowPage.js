import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const BoardGameShowPage = (props) => {
    const [boardGame, setBoardGame] = useState({})
    const id = props.match.params.id 

    const getBoardGame = async () =>{

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

    useEffect(() =>{
        getBoardGame()
    }, [])

    return(
        <div>
            <h2>{boardGame.name}</h2>
            <ul className="game-info">
                IMG placeholder
                <li>Category {boardGame.category}</li>
                <li>Players: {boardGame.minPlayers}-{boardGame.maxPlayers}</li>
                <li>Est Play Time: {boardGame.estimatedPlayTime}</li>
                <li>Rating: </li>
            </ul>
            <div className="description">
            <p>Description:</p>
            <p>{boardGame.description}</p>
            </div>
        </div>
    )

}

export default BoardGameShowPage