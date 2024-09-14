const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomName, getRandomUsername, getRandomThoughtText, getRandomReactions } = require('./data');

// Handle connection errors
connection.on('error', (err) => err);

// When connection is established
connection.once('open', async () => {
  console.log('connected');

  // Check if collections exist and drop them if they do
  let usersCheck = await connection.db.listCollections({ name: 'users' }).toArray();
  if (usersCheck.length) {
    await connection.dropCollection('users');
  }

  let thoughtsCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
  if (thoughtsCheck.length) {
    await connection.dropCollection('thoughts');
  }

  // Create an empty array to hold the users
  const users = [];

  // Loop to create 20 random users
  for (let i = 0; i < 20; i++) {
    const fullName = getRandomName();
    const [first, last] = fullName.split(' ');
    const username = getRandomUsername();
    const email = `${username}@example.com`;

    users.push({
      username,
      email,
      thoughts: [],
      friends: [],
    });
  }

  // Add users to the collection
  const userData = await User.create(users);

  // Create an empty array to hold the thoughts
  const thoughts = [];

  // Loop to create 20 random thoughts
  for (let i = 0; i < 20; i++) {
    const thoughtText = getRandomThoughtText();
    const username = getRandomArrItem(users).username;
    const reactions = getRandomReactions(3); // Each thought will have up to 3 reactions

    thoughts.push({
      thoughtText,
      createdAt: new Date(),
      username,
      reactions,
    });
  }

  // Add thoughts to the collection
  await Thought.create(thoughts);

  // Log the seed data to the console
  console.table(users);
  console.table(thoughts);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
