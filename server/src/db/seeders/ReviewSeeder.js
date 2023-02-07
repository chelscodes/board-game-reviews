import { BoardGame, Review, User } from "../../models/index.js"

class ReviewSeeder {
  static async seed() {
    const monopolyGame = await BoardGame.query().findOne({ name: "Monopoly" })
    const sorryGame = await BoardGame.query().findOne({ name: "Sorry" })

    const user1 = await User.query().findOne({ userName: "jdog" })
    const user2 = await User.query().findOne({ userName: "Zgod" })

    const reviewsData = [
      {
        rating: 4,
        comment: "This game is fun, sometimes.",
        userId: user2.id,
        boardGameId: monopolyGame.id
      },
      {
        rating: 2,
        comment: "This game is apologetic.",
        userId: user1.id,
        boardGameId: sorryGame.id
      }
    ]

    for (const singleReviewData of reviewsData) {
      const currentReview = await Review.query().findOne(singleReviewData)
      if(!currentReview) {
        await Review.query().insert(singleReviewData)
      }
    }
  }
}

export default ReviewSeeder