export default function NoteItemPage({ notes }) {
    return (
        <>
        { notes.length ?
        notes.map((n, idx) => 
            <li className="NoteListItem" key={idx}>
            <span>{n.text}</span>
            <button>Delete</button>
            <button>Edit</button>
            </li>)         
        :
        <h3>No Notes Yet!</h3>
        }
        </>
    );
  }