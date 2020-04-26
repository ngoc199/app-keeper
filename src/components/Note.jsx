import React from "react"

function Note(props) {
  // Delete note
  function deleteNote(event) {
    props.onDelete(props.id)
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={deleteNote}>DELETE</button>
    </div>
  )
}

export default Note
