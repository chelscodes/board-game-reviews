import UserSerializer from "./UserSerializer.js"

class ReviewSerializer {
  static async getSummary(review) {
    const allowedAttributes = ["id", "rating", "comment", "boardGameId"]
    let serializedReview = {}
    for (const attribute of allowedAttributes) {
      serializedReview[attribute] = review[attribute]
    }
    const userData = await review.$relatedQuery("user")
    const serializedUser = UserSerializer.getSummary(userData)
    serializedReview.user = serializedUser
    return serializedReview
  }
}

export default ReviewSerializer