import React, { useState, useEffect } from "react";
import ReviewsList from "./ReviewsList";

const BoardGameShowPage = (props) => {
	const [boardGame, setBoardGame] = useState({
		name: "",
		minPlayers: "",
		maxPlayers: "",
		estimatedPlayTime: "",
		description: "",
		userId: "",
		reviews: []
	})
	
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
				props.history.push("/board-games")
				setErrors([])
			}
		} catch(err) {
			console.error(`Error in fetch: ${err.message}`)
		}
	}

	useEffect(() => {
		getBoardGame()
	}, [])

		let showButton
		if (currentUserId === boardGame.userId || role === "admin") {
			showButton = <div className="button-group">
			<input className="button" type="submit" value="Delete Current Game" onClick={handleDelete} />
		</div>
		}

	let playerRange

	if (boardGame.minPlayers === boardGame.maxPlayers) {
		playerRange = `${boardGame.minPlayers}`
	} else {
		playerRange = `${boardGame.minPlayers} - ${boardGame.maxPlayers}`
	}

	return(
		<>
			<div className="game-info">
				<div className="row column text-center">
					<h2>{boardGame.name}</h2>
					<div className="grid-x grid-padding-x">
						<p className="cell auto text-right">Players: {playerRange}</p>
						<p className="cell auto text-left">Time: {boardGame.estimatedPlayTime} minutes</p>
					</div>
					<p className="description">{boardGame.description}</p>
				</div>
			</div>
			{showButton}
			<ReviewsList boardGameId={id} reviews={boardGame.reviews}/>	
		</>
	)
}

export default BoardGameShowPage