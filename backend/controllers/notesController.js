const Note = require('../models/notes'); // Assuming you have a Note model for Mongoose

// Fetch all notes
const getAllNotes = async (req, res) => {
    try {
        const notes = await Note.find({});
        res.json(notes);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};

// Fetch a single note by ID
const getNoteById = async (req, res) => {
    try {
        const note = await Note.findById(req.params.id);

        if (!note) {
            return res.status(404).json({ message: "Note not found" });
        }

        res.json(note);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};

// Create a new note
const createNote = async (req, res) => {
    try {
        const { title, content } = req.body;
        const newNote = new Note({ title, content });

        const savedNote = await newNote.save();
        res.status(201).json(savedNote);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};

// Update an existing note
const updateNote = async (req, res) => {
    try {
        const { title, content } = req.body;
        const note = await Note.findByIdAndUpdate(req.params.id, { title, content }, { new: true });

        if (!note) {
            return res.status(404).json({ message: "Note not found" });
        }

        res.json(note);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};

// Delete a note
const deleteNote = async (req, res) => {
    try {
        const note = await Note.findByIdAndDelete(req.params.id);

        if (!note) {
            return res.status(404).json({ message: "Note not found" });
        }

        res.json({ message: "Note deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};

module.exports = {
    getAllNotes,
    getNoteById,
    createNote,
    updateNote,
    deleteNote
};
