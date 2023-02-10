import React from "react"

const ReviewTile = props => {
  const { rating, comment } = props
  const userName = props.user.userName

  // let starRating = ""
  // for (let i = 1; i <= 5; i++) {
  //   if (i <= rating) {
  //     starRating += "full star _ "
  //   } else {
  //     starRating += <i className="fa-regular fa-star"></i>
  //   }
  // }

  console.log(rating)
  return (
    <div className="callout grid-x grid-padding-x reviews_tile">
      <div className="cell small=12 medium-2 large-2 review_user-rating">
        <h5 className="text-center review_username">{userName}</h5>
        <p className="text-center">{rating}/5 stars</p>
        {/* <div><i className="fa-sharp fa-solid fa-star"></i></div> */}
      </div>
      <p className="cell small=12 medium-10 large-10 review_comment">{comment}</p>
    </div>
  )
}

export default ReviewTile