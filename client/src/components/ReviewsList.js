import React, { useState, useEffect } from "react"
import ReviewTile from "./ReviewTile"

const ReviewsList = props => {
  // useState to hold the reviews
  const [reviews, setReviews] = useState([])

  // fetch request for reviews data
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

  // create ReviewTiles
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
      <h3>You rendered the Reviews List!</h3>
      {reviewTiles}
    </>
  )
}

export default ReviewsList