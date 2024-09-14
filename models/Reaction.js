
// **Reaction** (SCHEMA ONLY)

// * `reactionId`
//   * Use Mongoose's ObjectId data type
//   * Default value is set to a new ObjectId

// * `reactionBody`
//   * String
//   * Required
//   * 280 character maximum

// * `username`
//   * String
//   * Required

// * `createdAt`
//   * Date
//   * Set default value to the current timestamp
//   * Use a getter method to format the timestamp on query

// **Schema Settings**:

// This will not be a model, but rather will be used as the `reaction` field's subdocument schema in the `Thought` model.
const { Schema, Types } = require('mongoose');

// Define the schema for Reaction subdocuments
const reactionSchema = new Schema(
  {
    // Generate a new ObjectId for each reaction by default
    reactionId: {
      type: Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    // Reaction body text with a maximum length of 280 characters
    reactionBody: {
      type: String,
      required: true, // Required field
      maxlength: 280, // Max length of 280 characters
    },
    // Username of the person who created the reaction
    username: {
      type: String,
      required: true, // Required field
    },
    // Timestamp of when the reaction was created
    createdAt: {
      type: Date,
      default: Date.now, // Default to current timestamp
      get: (timestamp) => new Date(timestamp).toLocaleString(), // Format the timestamp using a getter
    },
  },
  {
    toJSON: {
      getters: true, // Enable getter functions for formatting the output
    },
    id: false, // Disable the automatic generation of an id field for subdocuments
  }
);

// Export the reactionSchema to be used in other models (such as Thought)
module.exports = reactionSchema;
