const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');
const TimelineEvent = require('./models/TimelineEvent');
const Memory = require('./models/Memory');
const Letter = require('./models/Letter');
const QuizQuestion = require('./models/QuizQuestion');
const MissYouMessage = require('./models/MissYouMessage');

// Load environment variables
dotenv.config();

// Sample data
const timelineEvents = [
  {
    title: 'The Day We Met',
    date: new Date('2022-02-26'),
    description: 'The moment that changed everything forever.',
    whatIWasThinking: 'Is this the person I\'ve been waiting for? My heart knew before my mind did.',
    icon: '💫',
    order: 1
  },
  {
    title: 'First Conversation',
    date: new Date('2022-02-27'),
    description: 'Talking for hours like we\'d known each other forever.',
    whatIWasThinking: 'How can someone\'s voice feel like home? I never wanted this conversation to end.',
    icon: '💬',
    order: 2
  },
  {
    title: 'First Date',
    date: new Date('2022-03-05'),
    description: 'Nervous laughter, stolen glances, and the beginning of us.',
    whatIWasThinking: 'I tried to play it cool, but my heart was doing backflips. This is real.',
    icon: '☕',
    order: 3
  },
  {
    title: 'The Moment I Knew',
    date: new Date('2022-04-15'),
    description: 'When I realized you were my forever.',
    whatIWasThinking: 'It wasn\'t one big moment, but a thousand small ones that added up to forever.',
    icon: '💕',
    order: 4
  },
  {
    title: 'Fights We Survived',
    date: new Date('2022-08-20'),
    description: 'Every argument made us stronger.',
    whatIWasThinking: 'Even when we fight, I know we\'ll choose each other. That\'s what matters.',
    icon: '💪',
    order: 5
  },
  {
    title: '1 Year Strong',
    date: new Date('2023-02-26'),
    description: '365 days of choosing you every single morning.',
    whatIWasThinking: 'One year down, and I\'d choose you again in every lifetime.',
    icon: '🎉',
    order: 6
  },
  {
    title: 'The Day You Left for Bangalore',
    date: new Date('2024-01-15'),
    description: 'The hardest goodbye, but not the end of our story.',
    whatIWasThinking: 'My heart broke a little, but I know distance can\'t break what\'s real.',
    icon: '✈️',
    order: 7
  },
  {
    title: '2 Years Today – Still Obsessed',
    date: new Date('2024-02-26'),
    description: '730 days and I\'m still falling for you.',
    whatIWasThinking: 'After all this time, my heart still races when I think of you. Always will.',
    icon: '👑',
    order: 8
  }
];

const memories = [
  {
    title: 'First Meeting',
    description: 'The day that started it all',
    whatIWasThinking: 'Nervous, excited, and somehow knowing this was different',
    image: 'https://picsum.photos/seed/firstmeeting/400/300',
    category: 'milestone',
    date: new Date('2022-02-26')
  },
  {
    title: 'Coffee Date',
    description: 'Hours of conversation and laughter',
    whatIWasThinking: 'Like I could talk to you forever',
    image: 'https://picsum.photos/seed/coffee/300/400',
    category: 'memory',
    date: new Date('2022-03-05')
  },
  {
    title: 'Rainy Day Walk',
    description: 'Getting soaked but not caring',
    whatIWasThinking: 'Free and completely myself with you',
    image: 'https://picsum.photos/seed/rainy/400/500',
    category: 'memory',
    date: new Date('2022-06-15')
  },
  {
    title: 'First Anniversary',
    description: '365 days of choosing us',
    whatIWasThinking: 'Grateful for every moment',
    image: 'https://picsum.photos/seed/anniversary/500/300',
    category: 'milestone',
    date: new Date('2023-02-26')
  },
  {
    title: 'Late Night Calls',
    description: 'Falling asleep to your voice',
    whatIWasThinking: 'Safe, loved, and completely yours',
    image: 'https://picsum.photos/seed/calls/300/300',
    category: 'memory',
    date: new Date('2023-08-20')
  },
  {
    title: 'The Day You Left',
    description: 'Hardest goodbye, strongest promise',
    whatIWasThinking: 'Heartbroken but hopeful',
    image: 'https://picsum.photos/seed/goodbye/400/400',
    category: 'milestone',
    date: new Date('2024-01-15')
  }
];

const letters = [
  // Reasons
  {
    title: 'The way you look at me',
    content: 'Like I\'m the only person in the world, even in a crowded room.',
    category: 'reasons',
    order: 1
  },
  {
    title: 'Your patience with my chaos',
    content: 'You handle my mood swings and overthinking with a calm that amazes me.',
    category: 'reasons',
    order: 2
  },
  {
    title: 'How you make me laugh',
    content: 'Even on my worst days, you find a way to make me smile.',
    category: 'reasons',
    order: 3
  },
  {
    title: 'Your dedication to us',
    content: 'Even with distance, you never let me doubt our love.',
    category: 'reasons',
    order: 4
  },
  {
    title: 'The little things',
    content: 'Good morning texts, random calls, remembering tiny details I mention.',
    category: 'reasons',
    order: 5
  },
  // Unsaid
  {
    title: 'I\'m proud of you',
    content: 'More than you\'ll ever know. Every achievement, every step forward.',
    category: 'unsaid',
    order: 1
  },
  {
    title: 'I worry about you',
    content: 'When you\'re stressed, when you\'re tired, when you work too hard.',
    category: 'unsaid',
    order: 2
  },
  {
    title: 'I imagine our future',
    content: 'Randomly, in the middle of the day. Little moments we\'ll share.',
    category: 'unsaid',
    order: 3
  },
  // Promises
  {
    title: 'I\'ll always choose you',
    content: 'Every morning, every decision, every crossroads - it\'s always you.',
    category: 'promises',
    order: 1
  },
  {
    title: 'I\'ll support your dreams',
    content: 'Even when they scare me, even when they take you far away.',
    category: 'promises',
    order: 2
  },
  {
    title: 'I\'ll love you through the distance',
    content: 'Until we close every mile between us and more.',
    category: 'promises',
    order: 3
  }
];

const quizQuestions = [
  {
    question: 'What day did we first meet?',
    options: ['February 26, 2022', 'March 15, 2022', 'January 1, 2022', 'April 20, 2022'],
    correctAnswer: 0,
    explanation: 'The day that changed everything - February 26, 2022'
  },
  {
    question: 'What was our first date activity?',
    options: ['Movie and dinner', 'Coffee and conversation', 'Long walk in park', 'Shopping together'],
    correctAnswer: 1,
    explanation: 'Hours of coffee and conversation that felt like minutes'
  },
  {
    question: 'How long have we been together as of today?',
    options: ['1 year', '2 years', '6 months', '3 years'],
    correctAnswer: 1,
    explanation: 'Two amazing years and counting!'
  },
  {
    question: 'Where did I say Punjab still owns?',
    options: ['Your phone', 'Your heart', 'Your dreams', 'Your time'],
    correctAnswer: 1,
    explanation: 'Punjab still owns your heart, Bangalore boy!'
  },
  {
    question: 'What\'s our special anniversary date?',
    options: ['260224', '14022022', '01012023', '31122022'],
    correctAnswer: 0,
    explanation: 'February 26, 2024 - our special day!'
  }
];

const missYouMessages = [
  {
    message: 'Every mile between us makes my heart beat stronger for you.',
    category: 'miss'
  },
  {
    message: 'I miss you more than words can say, but I know this distance is temporary.',
    category: 'miss'
  },
  {
    message: 'Even when we\'re apart, you\'re always in my thoughts.',
    category: 'love'
  },
  {
    message: 'Counting the days until I can hold you again.',
    category: 'miss'
  },
  {
    message: 'Distance means so little when someone means so much.',
    category: 'romantic'
  },
  {
    message: 'You\'re worth every moment of this wait.',
    category: 'love'
  },
  {
    message: 'I fall in love with you all over again every time we talk.',
    category: 'romantic'
  },
  {
    message: 'This distance is just a test of how strong our love really is.',
    category: 'funny'
  }
];

const seedDatabase = async () => {
  try {
    // Connect to database
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing data
    await User.deleteMany({});
    await TimelineEvent.deleteMany({});
    await Memory.deleteMany({});
    await Letter.deleteMany({});
    await QuizQuestion.deleteMany({});
    await MissYouMessage.deleteMany({});

    console.log('Cleared existing data');

    // Insert sample data
    await TimelineEvent.insertMany(timelineEvents);
    await Memory.insertMany(memories);
    await Letter.insertMany(letters);
    await QuizQuestion.insertMany(quizQuestions);
    await MissYouMessage.insertMany(missYouMessages);

    // Create admin user
    await User.create({
      username: 'admin',
      password: process.env.ADMIN_PASSWORD || '260224',
      role: 'admin'
    });

    console.log('Sample data inserted successfully');
    console.log('Admin user created with username: admin');
    console.log('Database seeded!');

    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
