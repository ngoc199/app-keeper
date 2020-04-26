import React, { useState } from "react"

import Header from "./Header"
import InputNote from "./InputNote"
import Note from "./Note"
import Footer from "./Footer"

function App() {
  // Initialize notes state
  const [notes, setNotes] = useState([{ title: "title", content: "content" }])

  // Add note to notes list
  function addNote(note) {
    setNotes((prevNotes) => {
      return [...prevNotes, note]
    })
  }

  // Delete note with selected id from notes list
  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id
      })
    })
  }

  // Render to the view
  return (
    <div id="site_content">
      <Header />
      <InputNote notes={notes} onAdd={addNote} />
      <div>
        {notes.map((note, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={note.title}
              content={note.content}
              onDelete={deleteNote}
            />
          )
        })}
      </div>
      <Footer />
    </div>
  )
}

export default App
