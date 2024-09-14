// **Thought**:

// * `thoughtText`
//   * String
//   * Required
//   * Must be between 1 and 280 characters

// * `createdAt`
//   * Date
//   * Set default value to the current timestamp
//   * Use a getter method to format the timestamp on query

// * `username` (The user that created this thought)
//   * String
//   * Required

// * `reactions` (These are like replies)
//   * Array of nested documents created with the `reactionSchema`

// **Schema Settings**:

// Create a virtual called `reactionCount` that retrieves the length of the thought's `reactions` array field on query.
const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction'); // Import the Reaction schema for nested documents

// Schema to create Thought model
const thoughtSchema = new Schema(
  {
    // The main content of the thought (with character length validation)
    thoughtText: {
      type: String,
      required: true, // Required field
      minlength: 1,   // Minimum 1 character
      maxlength: 280, // Maximum 280 characters
    },
    // Timestamp for when the thought was created
    createdAt: {
      type: Date,
      default: Date.now, // Default to current timestamp
      get: (timestamp) => new Date(timestamp).toLocaleString(), // Format the timestamp using a getter
    },
    // Username of the user who created the thought
    username: {
      type: String,
      required: true, // Required field
    },
    // Array of nested reaction documents using the reactionSchema
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,  // Include virtual fields in the JSON output
      getters: true,   // Enable getters for formatting data
    },
    id: false,         // Disable the default _id field for this schema
  }
);

// Create a virtual to get the length of the reactions array (reaction count)
thoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

// Create the Thought model using the schema
const Thought = model('Thought', thoughtSchema);

// Export the Thought model to use in other parts of the application
module.exports = Thought;
