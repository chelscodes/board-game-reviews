import express from "express";
import {Review} from "../../../models/index.js"

import ReviewSerializer from "../../../serializers/ReviewSerializer.js"

const boardGameReviewsRouter = new express.Router({mergeParams: true})

boardGameReviewsRouter.get("/", async (req, res) => {
  const boardGameId = req.params.boardGameId
  try {
    const reviewsData = await Review.query().where({boardGameId})
    const reviews = await Promise.all(reviewsData.map( async (review) => {
      const serializedReview = ReviewSerializer.getSummary(review)
      return serializedReview
    }))
    return res.status(200).json({ reviews })
  } catch (error) {
    return res.status(500).json({ errors: error })
  }
})

export default boardGameReviewsRouter