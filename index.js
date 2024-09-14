// Import dependencies
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes'); // Adjust path if routes are in a different folder
const connection = require('./config/connection'); // Ensure this path is correct

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3001; // Use environment variable or default to 3001

// Middleware
app.use(express.json()); // Parse incoming JSON requests
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded requests

// Use routes
app.use('/api', routes); // Prefix all routes with /api

// Connect to MongoDB and start server
connection.once('open', () => {
  console.log('MongoDB connection established');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
