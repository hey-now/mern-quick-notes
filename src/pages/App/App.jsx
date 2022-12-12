import { useState } from 'react';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import NewNotePage from '../NewNotePage/NewNotePage';
import NoteListPage from '../NoteListPage/NoteListPage';



export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
      { user ?
          <>
          <NavBar user={user}/>
          <NoteListPage user={user} setUser={setUser} />
          <hr />
          <NewNotePage user={user} setUser={setUser} />
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
