const express = require('express');
const router = express.Router();
const {
    getAllNotes,
    getNoteById,
    createNote,
    updateNote,
    deleteNote
} = require('../controllers/notesController');

// Route to get all notes
router.get('/', getAllNotes);

// Route to get a specific note by its ID
router.get('/:id', getNoteById);

// Route to create a new note
router.post('/', createNote);

// Route to update a note by its ID
router.put('/:id', updateNote);

// Route to delete a note by its ID
router.delete('/:id', deleteNote);

module.exports = router;
