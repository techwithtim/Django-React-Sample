import React from "react"

function Note({ note, onDelete }) {
    // Assuming note.created_at is in ISO format, e.g., "2023-03-14T15:09:03.000Z"
    const formattedDate = new Date(note.created_at).toLocaleDateString("en-US");
  
    return (
      <div style={{ padding: '10px', margin: '20px 0', border: '1px solid #ccc', borderRadius: '5px' }}>
        <p style={{ color: '#333' }}>{note.title}</p>
        <p style={{ color: '#666' }}>{note.content}</p>
        <p style={{ color: '#999', fontSize: '0.8rem' }}>{formattedDate}</p>
        <button onClick={() => onDelete(note.id)}>Delete</button>
      </div>
    );
  }

export default Note