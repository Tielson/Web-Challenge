"use client"

import { useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react"
import { GetItemsAll } from "../../api/get-items"
import Header from "../../components/Header"
import NoteCreator from "../../components/NoteCreator"
import NotesList from "../../components/NotesList"
import "../../styles/App.scss"
import { Note } from "../../types/note"

export function Home() {
  const [notes, setNotes] = useState<Note[]>([])

  const { data } = useQuery({
    queryKey: ["notes"],
    queryFn: async () => {
      return await GetItemsAll()
    },    
  })
  
  const addNote = (note: Omit<Note, "id">) => {
    const newNote = {
      ...note,
      id: Date.now().toString(),
    }
    setNotes([newNote, ...notes])
  }

  const toggleFavorite = (id: string) => {
    setNotes(notes.map((note) => (note.id === id ? { ...note, favorite: !note.favorite } : note)))
  }

  const deleteNote = (id: string) => {
    setNotes(notes.filter((note) => note.id !== id))
  }

  const changeNoteColor = (id: string, color: Note["color"]) => {
    setNotes(notes.map((note) => (note.id === id ? { ...note, color } : note)))
  }

  const changeNoteEdit = (id: string, title: Note["title"], content: Note["content"]) => {
    setNotes(notes.map((note) => (note.id === id ? { ...note, title, content } : note)))
  }

  const favoriteNotes = notes.filter((note) => note.favorite)
  const otherNotes = notes.filter((note) => !note.favorite)

  useEffect(() => {
    if (data) {
      setNotes(data?.map((note) => ({
          ...note,
          id: note.id,
        }))
        .reverse()
      )
    }
  },[data])

  return (
    <div className="app">
      <Header />
      <main className="app-content">
        <NoteCreator onAddNote={addNote} />

        <section className="notes-section">
          <h2 className="section-title">Favoritos</h2>
          <NotesList
            notes={favoriteNotes}
            onToggleFavorite={toggleFavorite}
            onChangeNoteEdit={changeNoteEdit}
            onDeleteNote={deleteNote}
            onChangeColor={changeNoteColor}
          />
        </section>

        <section className="notes-section">
          <h2 className="section-title">Outras</h2>
          <NotesList
            notes={otherNotes}
            onToggleFavorite={toggleFavorite}
            onChangeNoteEdit={changeNoteEdit}
            onDeleteNote={deleteNote}
            onChangeColor={changeNoteColor}
          />
        </section>
      </main>
    </div>
  )
}


