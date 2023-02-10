import React, { useState, useEffect } from "react"
import ReviewTile from "./ReviewTile"

const ReviewsList = props => {
  const reviewTiles = props.reviews.map(review => {
    return (
      <ReviewTile
        key={review.id}
        {...review}
      />
    )
  })

  let showReviews = reviewTiles
  if (reviewTiles.length === 0) {
    showReviews = <p className="message-no-reviews">There aren't any reviews for this game yet.</p>
  }

  return (
    <>
      <h3 className="text-center reviews_header">Reviews</h3>
      <div className="row medium-8 large-7 columns">
        {showReviews}
      </div>
    </>
  )
}

export default ReviewsList