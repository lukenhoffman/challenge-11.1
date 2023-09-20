import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';  // for improved assertions

import App from '../App';
import LandingPage from '../components/LandingPage';
import NoteList from '../components/NoteList';
import NoteEditor from '../components/NoteEditor';

describe("LandingPage Component", () => {
    it("should display the welcome message", () => {
        render(<LandingPage />);
        expect(screen.getByText("Welcome to Note Taker")).toBeInTheDocument();
    });

    it("should have a link to start taking notes", () => {
        render(<LandingPage />);
        const linkElement = screen.getByText("Start Taking Notes");
        expect(linkElement).toBeInTheDocument();
        expect(linkElement.closest('a')).toHaveAttribute('href', '/notes');
    });
});

describe("NoteList Component", () => {
    const mockNotes = [
        { id: 1, title: "Sample Note 1", content: "Sample Content 1" },
        { id: 2, title: "Sample Note 2", content: "Sample Content 2" }
    ];

    it("should list all notes", () => {
        render(<NoteList notes={mockNotes} />);
        mockNotes.forEach(note => {
            expect(screen.getByText(note.title)).toBeInTheDocument();
        });
    });

    it("should trigger callback when a note is clicked", () => {
        const handleNoteClick = jest.fn();
        render(<NoteList notes={mockNotes} onNoteClick={handleNoteClick} />);
        
        fireEvent.click(screen.getByText("Sample Note 1"));
        expect(handleNoteClick).toHaveBeenCalledWith(mockNotes[0]);
    });
});

describe("NoteEditor Component", () => {
    it("should display an empty editor when no initial note is provided", () => {
        render(<NoteEditor />);
        expect(screen.getByPlaceholderText("Enter note title...")).toHaveValue('');
        expect(screen.getByPlaceholderText("Enter note content...")).toHaveValue('');
    });

    it("should display note details when an initial note is provided", () => {
        const mockNote = { title: "Test Title", content: "Test Content" };
        render(<NoteEditor initialNote={mockNote} />);
        expect(screen.getByDisplayValue(mockNote.title)).toBeInTheDocument();
        expect(screen.getByDisplayValue(mockNote.content)).toBeInTheDocument();
    });

    // ... You can also test functionalities like saving the note, etc.
});

describe("App", () => {
    it("should render the landing page by default", () => {
        render(<App />);
        expect(screen.getByText("Welcome to Note Taker")).toBeInTheDocument();
    });

    // ... Other tests like navigation, integration between components, etc.
});
