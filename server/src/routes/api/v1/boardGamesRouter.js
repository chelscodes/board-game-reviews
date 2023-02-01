import express from "express";
import { BoardGame } from "../../../models/index.js";


const boardGamesRouter = new express.Router()

boardGamesRouter.get("/", async (req, res) => {
    try {
        const boardGames = await BoardGame.query()
        return res.status(200).json({ boardGames })
    } catch (err) {
        return res.status(500).json({ errors: err })
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

export default boardGamesRouter