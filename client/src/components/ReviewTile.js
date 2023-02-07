import React from "react"

const ReviewTile = props => {
  const { rating, comment } = props
  const userName = props.user.userName

  return (
    <div className="callout grid-x grid-padding-x">
      <div className="cell small=12 medium-4 large-4 review-box">
        <h5 className="text-center">{userName}</h5>
        <p className="text-center">{rating}/5 stars</p>
      </div>
      <p className="cell small=12 medium-8 large-8 review-box">{comment}</p>
    </div>
  )
}

export default ReviewTile