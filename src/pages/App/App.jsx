import { useState, useEffect } from 'react';
import * as notesAPI from '../../utilities/notes-api';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import NewNotePage from '../NewNotePage/NewNotePage';
import NoteListPage from '../NoteListPage/NoteListPage';



export default function App() {
  const [user, setUser] = useState(getUser());
  const [notes, setNotes] = useState([]);

  async function addNote(note) {
    const newNote = await notesAPI.create(note);
    console.log(newNote);
    setNotes([...notes, newNote]);
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
          <NoteListPage user={user} setUser={setUser} notes={notes} />
          <hr />
          <NewNotePage user={user} setUser={setUser} addNote={addNote} />
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
