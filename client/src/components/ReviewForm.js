import React, { useEfect } from "react"
// import { Redirect } from "react-router-dom"

import ErrorList from "./layout/ErrorList"
import translateServerErrors from "../services/translateServerErrors"

const ReviewForm = (props) => {
  
  const [newReview, setNewReview] = useState({
    rating: null,
    comment: ''
  })
  const [errors, setErrors] = useState([])

  const addNewReview = async () => {
    const id = props.match.params.id

    try {
      const response = await fetch(`/api/v1/board-games/${id}`, {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json"
        }),
        body: JSON.stringify(newReview)
      })
      if (!response.ok) {
        if (response.status === 422) {
          const body = await response.json()
          const newErrors = translateServerErrors(body.errors)
          return setErrors(newErrors)
        } else {
          const errorMessage = `${response.status} (${response.statusText})`
          const error = new Error(errorMessage)
          throw error
        }  
      } else {
        const body = await response.json()
        setShouldRedirect(true)
      }
    } catch (error) {
      console.error(`Error in fetch: ${error.errorMessage}`)
    }
  }

  const handleInputChange = event => {
    setNewReview({
      ...newReview,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    addNewReview()
    clearForm()
  }

  const clearForm = () => {
    setNewReview({
      rating: null,
      comment: ''
    })
  }

  return (
    <>
      <h2>Add a Review for</h2>
      <ErrorList errors={errors} />
      <form onSubmit={handleSubmit} className="callout">
        <fieldset>
          <legend>Please rate from 1-10</legend>
            <div>
              <input type="radio" id="ratingChoice1" name="rating" value="1" onChange={handleInputChange} />
              <label for="ratingChoice1">1</label>

              <input type="radio" id="ratingChoice2" name="rating" value="2" onChange={handleInputChange} />
              <label for="ratingChoice1">2</label>

              <input type="radio" id="ratingChoice3" name="rating" value="3" onChange={handleInputChange} />
              <label for="ratingChoice1">3</label>

              <input type="radio" id="ratingChoice4" name="rating" value="4" onChange={handleInputChange} />
              <label for="ratingChoice1">4</label>

              <input type="radio" id="ratingChoice5" name="rating" value="5" onChange={handleInputChange} />
              <label for="ratingChoice1">5</label>
            </div>
        </fieldset>
        <label>
          Comment:
          <textarea id="comment" name="comment" onChange={handleInputChange} value={newReview.comment} />
        </label>
        <div className="button-group">
					<input className="button" type="submit" value="Submit New Review" />
				</div>
      </form>
    </>
  )
  
}

export default NewBoardGameReviewForm