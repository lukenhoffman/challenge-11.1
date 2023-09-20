import React, { useState } from 'react';

function NoteEditor({ initialNote, onSave }) {
    const [note, setNote] = useState({
        title: initialNote ? initialNote.title : '',
        content: initialNote ? initialNote.content : ''
    });

    const handleTitleChange = (event) => {
        setNote(prevNote => ({
            ...prevNote,
            title: event.target.value
        }));
    };

    const handleContentChange = (event) => {
        setNote(prevNote => ({
            ...prevNote,
            content: event.target.value
        }));
    };

    const handleSave = () => {
        onSave(note);
    };

    return (
        <div className="note-editor">
            <input 
                type="text" 
                value={note.title} 
                onChange={handleTitleChange} 
                placeholder="Enter note title" 
                className="note-title-input"
            />
            <textarea 
                value={note.content} 
                onChange={handleContentChange} 
                placeholder="Enter note content" 
                className="note-content-textarea"
            />
            <button onClick={handleSave} className="save-button">Save</button>
        </div>
    );
}

export default NoteEditor;
