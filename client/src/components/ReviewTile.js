import React from "react"
import { useState } from "react"

const ReviewTile = props => {
  const { rating, comment } = props
  const userName = props.user.userName
  const [voteCount, setVoteCount] = useState(0)

  const handleUpvote = () => {
    setVoteCount(voteCount + 1)
  }

  const handleDownvote = () => {
    setVoteCount(voteCount - 1)
  }

  return (
    <div className="callout review-container">
    <div className="grid-x">
      <div className="cell small-12 medium-4 review-username-container">
        <p className="review-username">{userName}</p>
      </div>
      <div className="cell small-12 medium-8">
        <p className="review-comment">{comment}</p>
      </div>
    </div>
    <div className="grid-x align-right">
      <div className="cell small-12 medium-4 review-rating-container">
          <p className="review-rating">{rating}</p>
      </div>
      <div className="cell small-12 medium-8">
        <div className="vote-btns">
          <button className="upvote-btn" onClick={handleUpvote}>Upvote</button>
          <button className="downvote-btn" onClick={handleDownvote}>Downvote</button>
        </div>
        <p className="vote-count">Vote count: {voteCount}</p>
      </div>
    </div>
  </div>

  )
}

export default ReviewTile