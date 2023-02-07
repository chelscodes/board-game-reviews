import { Review } from "../models/index.js"
import ReviewSerializer from "./ReviewSerializer.js"

class BoardGameSerializer {
  static async getSummary(boardGame) {

    const allowedAttributes = ["id", "name", "minPlayers", "maxPlayers", "estimatedPlayTime", "description"]

    let serializedBoardGame = {}

    for (const attribute of allowedAttributes) {
      serializedBoardGame[attribute] = boardGame[attribute]
    }

    const boardGameId = boardGame.id
    const reviewsData = await Review.query().where({boardGameId})
    const reviews = await Promise.all(reviewsData.map( async (review) => {
      const serializedReview = ReviewSerializer.getSummary(review)
      return serializedReview
    }))
    serializedBoardGame.reviews = reviews
    return serializedBoardGame
  }
}

export default BoardGameSerializer