import React, { useState, useEffect } from "react";

const BoardGameShowPage = (props) => {
	const [boardGame, setBoardGame] = useState({
		name: "",
		minPlayers: "",
		maxPlayers: "",
		estimatedPlayTime: "",
		description: "",
		userId: ""
	})
	const [showButton, setShowButton] = useState(false)
	
	const id = props.match.params.id 
	const role = props.currentUser?.role
	const currentUserId = props.currentUser?.id


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

	const handleDelete = async () => {
		try {
			const response = await fetch(`/api/v1/board-games/${id}`, {
				method: "DELETE",
				headers: new Headers({
					"Content-Type": "application/json"
				})
			})
			if (!response.ok) {
				if (response.status === 422) {
					const newErrors = translateServerErrors(body.errors)
					return setErrors(newErrors)
				} else {
					const errorMessage = `${response.status} (${response.statusText})`
					const error = new Error(errorMessage)
					throw(error)
				}
			} else {
				console.log("Board game deleted successfully!")
				props.history.push("/board-games")
				setErrors([])
			}
		} catch(err) {
			console.log(err)
			console.error(`Error in fetch: ${err.message}`)
		}
	}

	useEffect(() => {
		getBoardGame()
	}, [])

	useEffect(() => {
		if (currentUserId === boardGame.userId || role === "admin") {
			setShowButton(true)
		}
	})


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
			{showButton && (
				<div className="button-group">
					<input className="button" type="submit" value="Delete Current Game" onClick={handleDelete} />
				</div>)}
			</div>
			)
}

export default BoardGameShowPage