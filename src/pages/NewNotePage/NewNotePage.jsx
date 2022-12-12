import { useState } from 'react';

export default function NewNoteForm() {
  const [formData, setFormData] = useState('');

  return (
    <form className="NewSkillForm">
      <label>Note</label>
      <input
        type="text"
        placeholder="New Note"
        required
      />
      <button type="submit">Add Note</button>
    </form>
  );
}