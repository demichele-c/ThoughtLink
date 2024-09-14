// **User**:

// * `username`
//   * String
//   * Unique
//   * Required
//   * Trimmed

// * `email`
//   * String
//   * Required
//   * Unique
//   * Must match a valid email address (look into Mongoose's matching validation)

// * `thoughts`
//   * Array of `_id` values referencing the `Thought` model

// * `friends`
//   * Array of `_id` values referencing the `User` model (self-reference)

// **Schema Settings**:

// Create a virtual called `friendCount` that retrieves the length of the user's `friends` array field on query.
const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
  {
    // Username field with unique constraint and trimming to remove extra spaces
    username: {
      type: String,
      unique: true,   // Ensure the username is unique
      required: true, // Required field
      trim: true,     // Trim any whitespace around the value
    },
    // Email field with unique constraint and a validation regex for correct email format
    email: {
      type: String,
      required: true,  // Required field
      unique: true,    // Ensure the email is unique
      match: [/.+@.+\..+/, 'Must match a valid email address'], // Use a regex to ensure it's a valid email
    },
    // Array of Thought IDs referencing the Thought model
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought', // Reference to Thought model
      }
    ],
    // Array of User IDs (self-reference) for the user's friends list
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User', // Reference to User model (self-referencing)
      }
    ],
  },
  {
    toJSON: {
      virtuals: true,  // Include virtual fields in the JSON output
      getters: true,   // Enable getters for formatting data
    },
    id: false,         // Disable the default _id field for this schema
  }
);

// Create a virtual to get the length of the user's friends array (friend count)
userSchema.virtual('friendCount').get(function() {
  return this.friends.length;
});

// Create the User model using the schema
const User = model('User', userSchema);

// Export the User model to use in other parts of the application
module.exports = User;
