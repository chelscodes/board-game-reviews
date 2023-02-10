import React from "react"

const ReviewTile = props => {
  const { rating, comment } = props
  const userName = props.user.userName

  let starRating = ""
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      starRating += "★"
    } else {
      starRating += "☆"
    }
  }

  return (
    <div className="callout grid-x grid-padding-x reviews_tile">
      <div className="cell small=12 medium-4 large-3 review_user-rating">
        <h5 className="text-center review_username">{userName}</h5>
        <p className="text-center stars">{starRating}</p>
      </div>
      <p className="cell small=12 medium-8 large-9 review_comment">{comment}</p>
    </div>
  )
}

export default ReviewTile