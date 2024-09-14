// Import necessary models
const { Thought, User } = require('../models');

module.exports = {
  // Get all thoughts
  async getThoughts(req, res) {
    try {
      // Find all thoughts in the database
      const thoughts = await Thought.find();
      // Respond with the list of thoughts in JSON format
      res.json(thoughts);
    } catch (err) {
      // Return error if something goes wrong
      res.status(500).json(err);
    }
  },

  // Get a single thought by ID
  async getSingleThought(req, res) {
    try {
      // Find a single thought based on the thoughtId from the request params
      const thought = await Thought.findOne({ _id: req.params.thoughtId });

      // If no thought is found, send a 404 error response
      if (!thought) {
        return res.status(404).json({ message: 'No thought found with that ID' });
      }

      // Send the found thought in JSON format
      res.json(thought);
    } catch (err) {
      // Return error if something goes wrong
      res.status(500).json(err);
    }
  },

  // Create a new thought (and link it to a user)
  async createThought(req, res) {
    try {
      // Create a new thought using the request body
      const thought = await Thought.create(req.body);

      // Find the associated user and add the thought ID to the user's thoughts array
      await User.findOneAndUpdate(
        { _id: req.body.userId },  // Find the user by ID
        { $addToSet: { thoughts: thought._id } }  // Add the thought ID to the user's thoughts array
      );

      // Respond with the newly created thought
      res.json(thought);
    } catch (err) {
      // Return error if something goes wrong
      res.status(500).json(err);
    }
  },

  // Update a thought by ID
  async updateThought(req, res) {
    try {
      // Find and update the thought by thoughtId, and return the updated document
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },  // Set the new values from the request body
        { runValidators: true, new: true }  // Validate new data and return the updated document
      );

      // If no thought is found, send a 404 error response
      if (!thought) {
        return res.status(404).json({ message: 'No thought found with that ID' });
      }

      // Respond with the updated thought
      res.json(thought);
    } catch (err) {
      // Return error if something goes wrong
      res.status(500).json(err);
    }
  },

  // Delete a thought by ID
  async deleteThought(req, res) {
    try {
      // Find and delete the thought by thoughtId
      const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });

      // If no thought is found, send a 404 error response
      if (!thought) {
        return res.status(404).json({ message: 'No thought found with that ID' });
      }

      // Remove the thought ID from the user's thoughts array
      await User.findOneAndUpdate(
        { thoughts: req.params.thoughtId },  // Find the user that contains the thought ID
        { $pull: { thoughts: req.params.thoughtId } }  // Remove the thought ID from the user's thoughts array
      );

      // Respond with a success message
      res.json({ message: 'Thought deleted successfully' });
    } catch (err) {
      // Return error if something goes wrong
      res.status(500).json(err);
    }
  },

  // Add a reaction to a thought
  async addReaction(req, res) {
    try {
      // Find the thought by thoughtId and add a reaction to the reactions array
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $addToSet: { reactions: req.body } },  // Add the new reaction from the request body
        { runValidators: true, new: true }  // Validate new data and return the updated document
      );

      // If no thought is found, send a 404 error response
      if (!thought) {
        return res.status(404).json({ message: 'No thought found with that ID' });
      }

      // Respond with the updated thought (with the new reaction)
      res.json(thought);
    } catch (err) {
      // Return error if something goes wrong
      res.status(500).json(err);
    }
  },

  // Remove a reaction from a thought
  async removeReaction(req, res) {
    try {
      // Find the thought by thoughtId and remove the reaction by reactionId
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reactions: { reactionId: req.params.reactionId } } },  // Remove the reaction with the specified reactionId
        { new: true }  // Return the updated document
      );

      // If no thought is found, send a 404 error response
      if (!thought) {
        return res.status(404).json({ message: 'No thought found with that ID' });
      }

      // Respond with the updated thought (without the removed reaction)
      res.json(thought);
    } catch (err) {
      // Return error if something goes wrong
      res.status(500).json(err);
    }
  },
};
