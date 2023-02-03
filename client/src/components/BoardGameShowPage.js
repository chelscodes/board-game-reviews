import React, { useState, useEffect } from "react";


const BoardGameShowPage = (props) => {
	const [boardGame, setBoardGame] = useState({
		name: "",
		minPlayers: "",
		maxPlayers: "",
		estimatedPlayTime: "",
		description: ""
	})
	const id = props.match.params.id 
	const role = props.currentUser
	console.log(role)
	// now we can use the "role" to add a delete button that shows up if admin role is in current role
	//add if statement for role so if(role===admin) then button shows up else NO
	//add DELETE route (instead of 'post/get/etc) in the router
	//maybe something cool that we arent even thinking about.
	//check on "role" and passing it down


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
		<div>
			<h2>{boardGame.name}</h2>
			<ul className="game-info">
				<li>Players: {playerRange}</li>
				<li>Est Play Time: {boardGame.estimatedPlayTime} minutes</li>
			</ul>
			<div className="description">
				<p>Description:</p>
				<p>{boardGame.description}</p>
			</div>
		</div>
	)
}

export default BoardGameShowPage