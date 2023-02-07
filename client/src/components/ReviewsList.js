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

  return (
    <>
      <h4 className="text-center">Reviews</h4>
      <div className="row medium-8 large-7 columns">
        {reviewTiles}
      </div>
    </>
  )
}

export default ReviewsList