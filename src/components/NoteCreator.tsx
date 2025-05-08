"use client"

import type React from "react"

import { useState } from "react"
import "../styles/NoteCreator.scss"
import { Note } from "../types/note"

interface NoteCreatorProps {
  onAddNote: (note: Omit<Note, "id">) => void
}

const NoteCreator = ({ onAddNote }: NoteCreatorProps) => {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!title.trim()) return

    onAddNote({
      title,
      content: content || "Clique ou arraste o arquivo para esta área para fazer upload",
      color: "white",
      favorite: false,
    })

    setTitle("")
    setContent("")
  }

  return (
    <div className="note-creator">
      <form onSubmit={handleSubmit}>
        <div className="note-header">
          <input
            type="text"
            placeholder="Título"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="note-title"
          />
          <button type="button" className="star-button">
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
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </button>
        </div>
        <textarea
          placeholder="Criar nota..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="note-content"
        />
      </form>
    </div>
  )
}

export default NoteCreator

