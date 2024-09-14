// Import the Express Router
const router = require('express').Router();

// Import route modules for users and thoughts
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');

// Use the userRoutes module for any routes starting with `/users`
router.use('/users', userRoutes);

// Use the thoughtRoutes module for any routes starting with `/thoughts`
router.use('/thoughts', thoughtRoutes);

// Export the configured router
module.exports = router;
