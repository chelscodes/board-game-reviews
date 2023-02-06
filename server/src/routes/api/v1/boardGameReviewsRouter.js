import express from "express";
import objection from "objection";
const { ValidationError } = objection;
import cleanUserInput from "../../../services/cleanUserInput.js";
import Review from "../../../models/Review.js";

const boardGameReviewsRouter = new express.Router({mergeParams: true})

boardGameReviewsRouter.get("/", (req, res) => {
// get whatever params are needed - userId? boardGameId?
  try {
    // do a database query to get the reviews for the game
    return res.status(200).json({ reviews })
  } catch (error) {
    return res.status(500).json({ errors: error })
  }
})

export default boardGameReviewsRouter