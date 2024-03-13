import React from "react";
import "../styles/Note.css";

function Note({ note, onDelete }) {
  // Assuming note.created_at is in ISO format, e.g., "2023-03-14T15:09:03.000Z"
  const formattedDate = new Date(note.created_at).toLocaleDateString("en-US");

  return (
    <div className="note-container">
      <p className="note-title">{note.title}</p>
      <p className="note-content">{note.content}</p>
      <p className="note-date">{formattedDate}</p>
      <button className="delete-button" onClick={() => onDelete(note.id)}>
        Delete
      </button>
    </div>
  );
}

export default Note;
