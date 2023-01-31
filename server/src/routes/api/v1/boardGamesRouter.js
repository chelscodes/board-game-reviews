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

export default boardGamesRouter