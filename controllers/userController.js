// Import necessary models
const { User, Thought } = require('../models');

module.exports = {
  // Get all users
  async getUsers(req, res) {
    try {
      // Find all users in the database
      const users = await User.find();
      // Respond with the list of users in JSON format
      res.json(users);
    } catch (err) {
      // Return error if something goes wrong
      res.status(500).json(err);
    }
  },

  // Get a single user by ID
  async getSingleUser(req, res) {
    try {
      // Find a single user based on the userId from the request params
      const user = await User.findOne({ _id: req.params.userId });

      // If no user is found, send a 404 error response
      if (!user) {
        return res.status(404).json({ message: 'No user found with that ID' });
      }

      // Send the found user in JSON format
      res.json(user);
    } catch (err) {
      // Return error if something goes wrong
      res.status(500).json(err);
    }
  },

  // Create a new user
  async createUser(req, res) {
    try {
      // Create a new user using the request body
      const user = await User.create(req.body);
      // Respond with the newly created user
      res.json(user);
    } catch (err) {
      // Return error if something goes wrong
      res.status(500).json(err);
    }
  },

  // Update a user by ID
  async updateUser(req, res) {
    try {
      // Find and update the user by userId, and return the updated document
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },  // Set the new values from the request body
        { runValidators: true, new: true }  // Validate new data and return the updated document
      );

      // If no user is found, send a 404 error response
      if (!user) {
        return res.status(404).json({ message: 'No user found with that ID' });
      }

      // Respond with the updated user
      res.json(user);
    } catch (err) {
      // Return error if something goes wrong
      res.status(500).json(err);
    }
  },

  // Delete a user by ID
  async deleteUser(req, res) {
    try {
      // Find and delete the user by userId
      const user = await User.findOneAndDelete({ _id: req.params.userId });

      // If no user is found, send a 404 error response
      if (!user) {
        return res.status(404).json({ message: 'No user found with that ID' });
      }

      // Delete all thoughts associated with this user
      await Thought.deleteMany({ _id: { $in: user.thoughts } });

      // Respond with a success message
      res.json({ message: 'User and associated thoughts deleted successfully' });
    } catch (err) {
      // Return error if something goes wrong
      res.status(500).json(err);
    }
  },

  // Add a friend to a user's friend list
  async addFriend(req, res) {
    try {
      // Find the user by userId and add the friend's userId to the friends array
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { friends: req.params.friendId } },  // Add the friendId to the user's friends array
        { runValidators: true, new: true }  // Validate new data and return the updated document
      );

      // If no user is found, send a 404 error response
      if (!user) {
        return res.status(404).json({ message: 'No user found with that ID' });
      }

      // Respond with the updated user (with the new friend)
      res.json(user);
    } catch (err) {
      // Return error if something goes wrong
      res.status(500).json(err);
    }
  },

  // Remove a friend from a user's friend list
  async removeFriend(req, res) {
    try {
      // Find the user by userId and remove the friend's userId from the friends array
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: { friends: req.params.friendId } },  // Remove the friendId from the user's friends array
        { new: true }  // Return the updated document
      );

      // If no user is found, send a 404 error response
      if (!user) {
        return res.status(404).json({ message: 'No user found with that ID' });
      }

      // Respond with the updated user (without the removed friend)
      res.json(user);
    } catch (err) {
      // Return error if something goes wrong
      res.status(500).json(err);
    }
  },
};
