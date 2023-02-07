import React, { useState, useEffect } from "react"
import ReviewTile from "./ReviewTile"

const ReviewsList = props => {
  const [reviews, setReviews] = useState([])

  const getReviews = async () => {
    try {
      const response = await fetch(`/api/v1/board-games/${props.boardGameId}/reviews`)
      if(!response.ok) {
        const error = new Error(`${response.status}: ${response.statusText}`)
        throw(error)
      }
      const reviewsData = await response.json()
      setReviews(reviewsData.reviews)
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    getReviews()
  }, [])

  const reviewTiles = reviews.map(review => {
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