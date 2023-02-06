import express from "express";
import { BoardGame } from "../../../models/index.js";
import objection from "objection";
const { ValidationError } = objection;

import cleanUserInput from "../../../services/cleanUserInput.js";

const boardGamesRouter = new express.Router()

boardGamesRouter.get("/", async (req, res) => {
	try {
		const boardGames = await BoardGame.query()
		return res.status(200).json({ boardGames })
	} catch (error) {
		return res.status(500).json({ errors: error })
	}
})

boardGamesRouter.post("/", async (req, res) => {
	const formInput = cleanUserInput(req.body)

	try {
		const newBoardGame = await BoardGame.query().insertAndFetch(formInput)
		return res.status(201).json({ newBoardGame })
	} catch (error) {
		if (error instanceof ValidationError) {
			return res.status(422).json({ errors: error.data })
		}
		return res.status(500).json({ errors: error })
	}
})

boardGamesRouter.get("/:id", async (req, res) =>{
	const { id } = req.params
	try {
		const boardGame = await BoardGame.query().findById(id)
		if (boardGame) {
			return res.status(200).json({ boardGame })
		}
	} catch (error) {
		return res.status(500).json({ errors: error })
	}
})

boardGamesRouter.delete("/:id", async (req, res) =>{
	const { id } = req.params
	try {
		const deletedBoardGame = await BoardGame.query().delete().where("id", id)
		if (deletedBoardGame) {
			return res.status(204).send()
		}
		return res.status(404).json({ errors: "Board game not found" })
	} catch (error) {
		return res.status(500).json({ errors: error })
	}
})

export default boardGamesRouter