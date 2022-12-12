import { useState } from 'react';
import * as usersService from '../../utilities/users-service';
import NoteItemPage from "../NoteItemPage/NoteItemPage"

export default function NoteListPage({ user, notes }) {
  return (
    <>
      <h1>All of {user.name}'s Notes</h1>
      <ul><NoteItemPage notes={notes}/></ul>
    </>
  );
}