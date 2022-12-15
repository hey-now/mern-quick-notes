import { useState, useEffect } from 'react';
import * as notesAPI from '../../utilities/notes-api';
import { getUser } from '../../utilities/users-service';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import NewNotePage from '../NewNotePage/NewNotePage';
import NoteListPage from '../NoteListPage/NoteListPage';
import UpdateNotePage from '../UpdateNotePage/UpdateNotePage';




export default function App() {
  const [user, setUser] = useState(getUser());
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate();

  async function addNote(note) {
    const newNote = await notesAPI.create(note);
    setNotes([...notes, newNote]);
  }
  async function handleDelete(id) {
    await notesAPI.deleteNote(id);
    const remainingNotes = notes.filter(note => note._id !== id);
    setNotes(remainingNotes);
  }
  async function handleUpdateNote(noteFormData, id) {
    const handleUpdatedNotes = await notesAPI.updateNote(id, noteFormData);
    const notes = await notesAPI.getAll();
    setNotes(notes);
    navigate('/');
  }


  useEffect(function() {
    async function getNotes() {
      const notes = await notesAPI.getAll();
      setNotes(notes);
    }
    getNotes();
  }, []);

  return (
    <main className="App">
      { user ?
          <>
          <NavBar user={user}/>
          <Routes>
          <Route path='/notes/:id/update' element={<UpdateNotePage handleUpdateNote={handleUpdateNote} notes={notes}/>}/>
          </Routes>
          <NoteListPage user={user} setUser={setUser} notes={notes} handleDelete={handleDelete} handleUpdateNote={handleUpdateNote} />
          <hr />
          <NewNotePage user={user} setUser={setUser} addNote={addNote} />
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
