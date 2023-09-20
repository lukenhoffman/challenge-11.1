import React from 'react';

function NoteList({ notes, onNoteClick }) {
    return (
        <div className="note-list">
            <h2 className="note-list-title">Notes</h2>
            <ul className="note-list-items">
                {notes.map(note => (
                    <li key={note.id} className="note-list-item" onClick={() => onNoteClick(note)}>
                        {note.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default NoteList;
