import { useParams } from 'react-router-dom'
import { useState} from 'react'

export default function UpdateNotePage({ notes, handleUpdateNote }) {
    const {id} = useParams();
    let updateNote = notes.find(note => note._id === id);
    const [updatedNote, setUpdatedNote] = useState(updateNote);
    if (!updateNote) return null;

    function handleChange(evt) {
        const updatedNoteForm = {...updateNote, [evt.target.name]: evt.target.value};
        setUpdatedNote(updatedNoteForm);
    }
    function handleSubmit(evt) {
        evt.preventDefault();
        handleUpdateNote(updatedNote, id);
    }

    return (
        <>
        <h1>Edit Note Form</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" value={updatedNote.text} name="text" onChange={handleChange}/>
            <button type='submit'>LET'S GOOOO</button>
        </form>
        </>
    );
}