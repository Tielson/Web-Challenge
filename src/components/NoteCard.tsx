"use client"

import { useState } from "react"
import "../styles/NoteCard.scss"
import { Note } from "../types/note"
import ColorPicker from "./ColorPicker"

interface NoteCardProps {
  note: Note
  onToggleFavorite: (id: string) => void
  onChangeNoteEdit: (id: string, title: Note["title"], content: Note["content"]) => void
  onDeleteNote: (id: string) => void
  onChangeColor: (id: string, color: Note["color"]) => void
}

const NoteCard = ({ note, onToggleFavorite, onChangeNoteEdit, onDeleteNote, onChangeColor }: NoteCardProps) => {
  const [showColorPicker, setShowColorPicker] = useState(false)

  const toggleColorPicker = () => {
    setShowColorPicker(!showColorPicker)
  }

  const handleColorChange = (color: Note["color"]) => {
    onChangeColor(note.id, color)
    setShowColorPicker(false)
  }

  const handleNoteEdit = (id: string) => {
    const newTitle = prompt("New title", note.title)
    const newContent = prompt("New content", note.content)
    if (newTitle && newContent) {
      onChangeNoteEdit(id, newTitle, newContent)
    }
  }

  return (
    <div className={`note-card note-${note.color}`}>
      <div className="note-header">
        <h3 className="note-title">{note.title}</h3>
        <button className={`star-button ${note.favorite ? "active" : ""}`} onClick={() => onToggleFavorite(note.id)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill={note.favorite ? "#ffa000" : "none"}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
        </button>
      </div>

      <div className="note-content">
        <p>{note.content}</p>
      </div>

      <div className="note-actions">

        
        <button className="action-button edit" onClick={() => handleNoteEdit(note.id)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 20h9"></path>
            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
          </svg>
        </button>
        <div className="color-picker-container">
          <button className="action-button color-picker-button" onClick={toggleColorPicker}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <circle cx="12" cy="12" r="4" fill="currentColor"></circle>
            </svg>
          </button>
          {showColorPicker && <ColorPicker onSelectColor={handleColorChange} />}
        </div>
        <button className="action-button delete" onClick={() => onDeleteNote(note.id)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default NoteCard

