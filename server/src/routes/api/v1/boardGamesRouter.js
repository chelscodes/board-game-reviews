import express from "express";
import { BoardGame } from "../../../models/index.js";
import objection from "objection";
const { ValidationError } = objection;
import boardGameReviewsRouter from "./boardGameReviewsRouter.js";

import cleanUserInput from "../../../services/cleanUserInput.js";
import BoardGameSerializer from "../../../serializers/BoardGameSerializer.js";

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
	const userId = req.user.id
	formInput.userId = userId
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
			const serializedBoardGame = await BoardGameSerializer.getSummary(boardGame)
			return res.status(200).json({ boardGame: serializedBoardGame })
		}
	} catch (error) {
		return res.status(500).json({ errors: error })
	}
})

boardGamesRouter.delete("/:id", async (req, res) =>{
	const { id } = req.params
	try {
		const rowsDeleted = await BoardGame.query().deleteById(id)
		if (rowsDeleted === 1) {
			return res.status(204).json("Game was deleted successfully!")
		}
		return res.status(404).json({ errors: "Board game not found" })
	} catch (error) {
		return res.status(500).json({ errors: error })
	}
})

boardGamesRouter.use("/:boardGameId/reviews", boardGameReviewsRouter)

export default boardGamesRouter