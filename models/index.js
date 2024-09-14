// Import the Reaction schema, Thought model, and User model
const Reaction = require('./Reaction');
const Thought = require('./Thought');
const User = require('./User');

// Export all models and schemas so they can be imported easily in other files
module.exports = { Reaction, Thought, User };
