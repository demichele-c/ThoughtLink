const names = [
  // List of names for users
  'Aaran', 'Aaren', 'Aarez', 'Aarman', 'Aaron', 'Aaron-James', 'Aarron', 'Aaryan', 'Aaryn', 'Aayan', 'Aazaan',
  'Abaan', 'Abbas', 'Abdallah', 'Abdalroof', 'Abdihakim', 'Abdirahman', 'Abdisalam', 'Abdul', 'Abdul-Aziz',
  'Abdulbasir', 'Abdulkadir', 'Abdulkarem', 'Smith', 'Jones', 'Coollastname', 'enter_name_here', 'Ze', 'Zechariah',
  'Zeek', 'Zeeshan', 'Zeid', 'Zein', 'Zen', 'Zendel', 'Zenith', 'Zennon', 'Zeph', 'Zerah', 'Zhen', 'Zhi', 'Zhong',
  'Zhuo', 'Zi', 'Zidane', 'Zijie', 'Zinedine', 'Zion', 'Zishan', 'Ziya', 'Ziyaan', 'Zohaib', 'Zohair', 'Zoubaeir',
  'Zubair', 'Zubayr', 'Zuriel', 'Xander', 'Jared', 'Courtney', 'Gillian', 'Clark', 'Grace', 'Kelsey', 'Tamar',
  'Alex', 'Mark', 'Farish', 'Sarah', 'Nathaniel', 'Parker',
];

const appDescriptions = [
  // List of descriptions for thoughts
  'Decision Tracker', 'Find My Phone', 'Learn Piano', 'Starbase Defender', 'Tower Defense', 'Monopoly Money Manager',
  'Movie trailers', 'Hello world', 'Stupid Social Media App', 'Notes', 'Messages', 'Email', 'Compass', 'Firefox',
  'Running app', 'Cooking app', 'Poker', 'Deliveries',
];

// Generate a random item from an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Generate a random full name by combining two random names
const getRandomName = () =>
  `${getRandomArrItem(names)} ${getRandomArrItem(names)}`;

// Generate a random username for a user
const getRandomUsername = () =>
  `${getRandomArrItem(names)}${Math.floor(Math.random() * (99 - 18 + 1) + 18)}`;

// Generate a random thought text
const getRandomThoughtText = () =>
  getRandomArrItem(appDescriptions);

// Generate an array of random reactions
const getRandomReactions = (int) => {
  const results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      reactionBody: getRandomThoughtText(),
      username: getRandomArrItem(names),
    });
  }
  return results;
};

// Export the functions for use in seed.js
module.exports = { getRandomName, getRandomUsername, getRandomThoughtText, getRandomReactions };
