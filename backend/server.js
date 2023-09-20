require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const notesRoutes = require('./routes/notesRoutes');
const cors = require('cors');  // To handle CORS (Cross-Origin Resource Sharing)

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());   // Use CORS middleware to allow cross-origin requests
app.use(express.json()); // For parsing JSON request bodies

// Connect to the database
connectDB();

// Routes
app.get('/', (req, res) => {
    res.send('Note Taker API is running...');
});

app.use('/api/notes', notesRoutes); // All notes-related routes are prefixed with /api/notes

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
