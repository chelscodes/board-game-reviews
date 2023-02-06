import React from "react"

const ReviewTile = props => {
  // get the props
  const { rating, comment } = props
  const userName = props.user.userName
  


  return (
    <>
      <p>Username: {userName}</p>
      <p>Rating: {rating}</p>
      <p>Comment:</p>
      <p>{comment}</p>
    </>
  )
}

export default ReviewTile