import React, { useState } from "react"
import { Redirect } from "react-router-dom"
import translateServerErrors from "../services/translateServerErrors"

import ErrorList from "./layout/ErrorList"


const NewBoardGameForm = props => {
	const [newBoardGame, setNewBoardGame] = useState({
		name: "",
		minPlayers: "",
		maxPlayers: "",
		estimatedPlayTime: "",
		description: ""
	})

	const [errors, setErrors] = useState({})
	const [shouldRedirect, setShouldRedirect] = useState(false)

	let newBoardGameId = ""

	const addNewBoardGame = async () => {
		try {
			const response = await fetch("/api/v1/board-games", {
				method: "POST",
				headers: new Headers({
					"Content-Type": "application/json"
				}),
				body: JSON.stringify(newBoardGame)
			})
			const body = await response.json()

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
				console.log("New board game added successfully!")
				newBoardGameId = body.newBoardGame.id
				setErrors({})
				setShouldRedirect(true)
			}
		} catch(err) {
			console.error(`Error in fetch: ${err.message}`)
		}
	}

	const handleInputChange = (event) => {
		setNewBoardGame({
			...newBoardGame,
			[event.currentTarget.name]: event.currentTarget.value
		})
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		addNewBoardGame()
	}

	if (shouldRedirect) {
		return <Redirect push to={`/board-games/${newBoardGameId}`} />
	}

	return (
		<>
			<h1>Add a New Board Game</h1>
			<ErrorList errors={errors} />
			<form onSubmit={handleSubmit} className="callout">
				<label>
					Name:
					<input type="text" id="name" name="name" onChange={handleInputChange} value={newBoardGame.name} />
				</label>
				<label>
					Minimum Players:
					<select name="minPlayers" id="minPlayers" onChange={handleInputChange} value={newBoardGame.minPlayers} >
						<option value="">--Please choose an option--</option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
						<option value="6">6</option>
						<option value="7">7</option>
						<option value="8">8</option>
						<option value="9plus">9+</option>
					</select>
				</label>
				<label>
					Maximum Players:
					<select id="maxPlayers" name="maxPlayers" onChange={handleInputChange} value={newBoardGame.maxPlayers} >
						<option value="">--Please choose an option--</option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
						<option value="6">6</option>
						<option value="7">7</option>
						<option value="8">8</option>
						<option value="9plus">9+</option>
					</select>
				</label>
				<label>
					Estimated Play Time (in minutes):
					<input type="number" id="estimatedPlayTime" name="estimatedPlayTime" onChange={handleInputChange} value={newBoardGame.estimatedPlayTime} />
				</label>
				<label>
					Description:
					<textarea id="description" name="description" onChange={handleInputChange} value={newBoardGame.description} />
				</label>

				<div className="button-group">
					<input className="button" type="submit" value="Submit New Board Game" />
				</div>
			</form>
		</>
	)
}

export default NewBoardGameForm