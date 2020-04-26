import React, { useState } from "react"

function InputNote(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  })

  //   Add note to the note list
  function addNote(event) {
    //     Push new note to the note list
    props.onAdd(note)

    // Reset the input field
    setNote({
      title: "",
      content: "",
    })

    //     Stop refreshing the page
    event.preventDefault()
  }

  //   Update value on typing
  function handleChange(event) {
    const { name, value } = event.target

    setNote((prevNote) => {
      return { ...prevNote, [name]: value }
    })
  }

  return (
    <form onSubmit={addNote} className="input_note">
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={note.title}
        onChange={handleChange}
      />
      <textarea
        type="text"
        name="content"
        placeholder="Take a note..."
        rows="3"
        value={note.content}
        onChange={handleChange}
      />
      <button type="submit">Add</button>
    </form>
  )
}

export default InputNote
