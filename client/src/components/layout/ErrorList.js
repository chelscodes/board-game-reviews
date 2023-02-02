import React from "react"

const ErrorList = props => {
  if (props.errors.length > 0) {
    const listItems = props.errors.map(error => {
      return (
        <li key={error}>
          {error}
        </li>
      )
    })
    return (
      <div className="callout alert">
        <ul>{listItems}</ul>
      </div>
    )
  } else {
    return ""
  }
}

export default ErrorList
