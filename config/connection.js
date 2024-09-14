// Import the 'connect' and 'connection' methods from the Mongoose library
const { connect, connection } = require('mongoose');

// Define the MongoDB connection string, pointing to the local database 'studentsDB'
const connectionString = 'mongodb://127.0.0.1:27017/studentsDB';

// Use Mongoose's 'connect' method to establish a connection to the database
connect(connectionString);

// Export the 'connection' object to be used in other parts of the application
module.exports = connection;
