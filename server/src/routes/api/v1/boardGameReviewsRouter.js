import express from "express";
import objection from "objection";
const { ValidationError } = objection;
import cleanUserInput from "../../../services/cleanUserInput.js";

const boardGameReviewsRouter = new express.Router({mergeParams: true})

boardGameReviewsRouter.post("/", async (req, res) => {
  const formInput = cleanUserInput(req.body)
  const { rating, comment } = formInput
  const userId = req.user.id
  const boardGameId = req.params.boardGameId

  try{
    const newReview = await Review.query().insertAndFetch({ rating, comment, userId, boardGameId})
    return res.status(201).json({ newReview })
  } catch(error) {
    if (error instanceof ValidationError) {
      return res.status(422).json({ errors: error.data })
    }
    return res.status(500).json({ errors: error })
  }
})

export default boardGameReviewsRouter