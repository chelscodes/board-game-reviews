import ReviewSerializer from "./ReviewSerializer.js"

class BoardGameSerializer {
  static async getSummary(boardGame) {

    const allowedAttributes = ["id", "name", "minPlayers", "maxPlayers", "estimatedPlayTime", "description", "userId"]

    let serializedBoardGame = {}

    for (const attribute of allowedAttributes) {
      serializedBoardGame[attribute] = boardGame[attribute]
    }

    const reviewsData = await boardGame.$relatedQuery("reviews")
    const reviews = await Promise.all(reviewsData.map( async (review) => {
      const serializedReview = ReviewSerializer.getSummary(review)
      return serializedReview
    }))
    serializedBoardGame.reviews = reviews
    return serializedBoardGame
  }
}

export default BoardGameSerializer