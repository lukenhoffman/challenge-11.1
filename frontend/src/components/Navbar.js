import React from 'react';

// Assuming you'd use an icon library like 'react-icons' for icons.
// If you're using another library or custom SVGs, adjust the imports accordingly.
import { FaRegSave, FaPen } from 'react-icons/fa';

function Navbar({ onSaveClick, onNewNoteClick }) {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <h1>Note Taker</h1> {/* This can be replaced with a logo image if you have one. */}
            </div>
            <div className="navbar-content">
                <button className="icon-button" onClick={onNewNoteClick} title="New Note">
                    <FaPen />
                </button>
                <button className="icon-button" onClick={onSaveClick} title="Save Note">
                    <FaRegSave />
                </button>
                {/* Optional: Add other navbar items/links here. */}
                <a href="/about" className="navbar-link">About</a>
                <a href="/help" className="navbar-link">Help</a>
            </div>
        </nav>
    );
}

export default Navbar;

