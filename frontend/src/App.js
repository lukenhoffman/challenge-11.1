import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Importing our components
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import NoteList from './components/NoteList';
import NoteEditor from './components/NoteEditor';

function App() {
    const [notes, setNotes] = useState([]); // Example initial state. In a real app, you might fetch these from an API.
    const [currentNote, setCurrentNote] = useState(null);

    const handleSaveNote = (note) => {
        // Logic to save the note, either by updating the local state or making an API call.
    };

    const handleNoteClick = (note) => {
        setCurrentNote(note);
    };

    return (
        <Router>
            <Navbar 
                onSaveClick={handleSaveNote} 
                onNewNoteClick={() => setCurrentNote(null)} // Reset current note to show empty editor
            />

            <div className="app-content">
                <Switch>
                    <Route path="/" exact>
                        <LandingPage />
                    </Route>

                    <Route path="/notes">
                        <div className="notes-interface">
                            <NoteList notes={notes} onNoteClick={handleNoteClick} />
                            <NoteEditor initialNote={currentNote} onSave={handleSaveNote} />
                        </div>
                    </Route>

                    {/* Additional routes can be added here if needed */}
                </Switch>
            </div>
        </Router>
    );
}

export default App;
