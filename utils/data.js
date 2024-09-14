const users = [
  // List of names for users
  'Aaran', 'Aaren', 'Aarez', 'Aarman', 'Aaron', 'Aaron-James', 'Aarron', 'Aaryan', 'Aaryn', 'Aayan', 'Aazaan',
  'Abaan', 'Abbas', 'Abdallah', 'Abdalroof', 'Abdihakim', 'Abdirahman', 'Abdisalam', 'Abdul', 'Abdul-Aziz',
  'Abdulbasir', 'Abdulkadir', 'Abdulkarem', 'Smith', 'Jones', 'Coollastname', 'enter_name_here', 'Ze', 'Zechariah',
  'Zeek', 'Zeeshan', 'Zeid', 'Zein', 'Zen', 'Zendel', 'Zenith', 'Zennon', 'Zeph', 'Zerah', 'Zhen', 'Zhi', 'Zhong',
  'Zhuo', 'Zi', 'Zidane', 'Zijie', 'Zinedine', 'Zion', 'Zishan', 'Ziya', 'Ziyaan', 'Zohaib', 'Zohair', 'Zoubaeir',
  'Zubair', 'Zubayr', 'Zuriel', 'Xander', 'Jared', 'Courtney', 'Gillian', 'Clark', 'Grace', 'Kelsey', 'Tamar',
  'Alex', 'Mark', 'Farish', 'Sarah', 'Nathaniel', 'Parker',
];

const thoughts = [
  // New unique thoughts for the database
  'Exploring the mysteries of the universe', 
  'The beauty of a sunset', 
  'Learning to code is an adventure', 
  'The power of human connection', 
  'Finding joy in the little things', 
  'The importance of mental health', 
  'The thrill of a new challenge', 
  'Rediscovering old hobbies', 
  'The impact of kindness on the world', 
  'Embracing change and growth', 
  'The significance of daily routines', 
  'Pursuing passions with dedication', 
  'The value of perseverance', 
  'Finding balance in a busy life', 
  'The joy of giving and receiving feedback', 
  'The influence of art on emotions', 
  'Building meaningful relationships', 
  'The importance of self-care', 
  'Appreciating nature’s wonders', 
  'Exploring new cultures and experiences',
];

const reactions = [
  // List of reaction bodies
  'This is amazing!',
  'I totally agree with this.',
  'Couldn’t have said it better myself.',
  'Interesting perspective!',
  'I feel the same way.',
  'This really made me think.',
  'I had a similar experience.',
  'Great insight!',
  'I hadn’t considered this before.',
  'This is quite thought-provoking.',
];

// Function to get a random item from an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Function to get a random full name
const getRandomName = () => `${getRandomArrItem(users)} ${getRandomArrItem(users)}`;

// Function to get a random username
const getRandomUsername = () => getRandomArrItem(users).toLowerCase() + Math.floor(Math.random() * 100);

// Function to get a random thought text
const getRandomThoughtText = () => getRandomArrItem(thoughts);

// Function to get a random reaction body
const getRandomReactionBody = () => getRandomArrItem(reactions);

// Function to generate random reactions
const getRandomReactions = (num) => {
  const reactions = [];
  for (let i = 0; i < num; i++) {
    reactions.push({
      reactionBody: getRandomReactionBody(),
      username: getRandomUsername(),
      createdAt: new Date(),
    });
  }
  return reactions;
};

// Export the functions
module.exports = {
  getRandomName,
  getRandomUsername,
  getRandomThoughtText,
  getRandomReactions,
  getRandomArrItem
};
