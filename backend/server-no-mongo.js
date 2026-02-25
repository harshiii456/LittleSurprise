const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Mock data for demo without MongoDB
const mockTimelineEvents = [
  {
    _id: '1',
    title: 'The Day We Met',
    date: '2022-02-26',
    description: 'The moment that changed everything forever.',
    whatIWasThinking: 'Is this the person I\'ve been waiting for? My heart knew before my mind did.',
    icon: '💫',
    order: 1
  },
  {
    _id: '2',
    title: 'First Conversation',
    date: '2022-02-27',
    description: 'Talking for hours like we\'d known each other forever.',
    whatIWasThinking: 'How can someone\'s voice feel like home? I never wanted this conversation to end.',
    icon: '💬',
    order: 2
  }
];

const mockLetters = [
  {
    _id: '1',
    title: 'The way you look at me',
    content: 'Like I\'m only person in the world, even in a crowded room.',
    category: 'reasons',
    order: 1
  },
  {
    _id: '2',
    title: 'Your patience with my chaos',
    content: 'You handle my mood swings and overthinking with a calm that amazes me.',
    category: 'reasons',
    order: 2
  }
];

const mockQuizQuestions = [
  {
    _id: '1',
    question: 'What day did we first meet?',
    options: ['February 26, 2022', 'March 15, 2022', 'January 1, 2022', 'April 20, 2022'],
    correctAnswer: 0,
    explanation: 'The day that changed everything - February 26, 2022'
  }
];

const mockMissYouMessages = [
  {
    _id: '1',
    message: 'Every mile between us makes my heart beat stronger for you.',
    category: 'miss'
  },
  {
    _id: '2',
    message: 'I miss you more than words can say, but I know this distance is temporary.',
    category: 'miss'
  }
];

// Mock authentication
const mockUser = {
  _id: '1',
  username: 'admin',
  role: 'admin'
};

// Routes
app.post('/api/auth/login', (req, res) => {
  const { password } = req.body;
  
  if (password === '260224') {
    // Mock JWT token (in production, use real JWT)
    const mockToken = 'mock-jwt-token-for-demo';
    
    res.json({
      success: true,
      token: mockToken,
      user: mockUser
    });
  } else {
    res.status(400).json({ message: 'Invalid credentials' });
  }
});

app.get('/api/auth/me', (req, res) => {
  res.json({
    success: true,
    user: mockUser
  });
});

app.get('/api/timeline', (req, res) => {
  res.json({
    success: true,
    count: mockTimelineEvents.length,
    data: mockTimelineEvents
  });
});

app.get('/api/letters', (req, res) => {
  const { category } = req.query;
  const filter = category ? { category } : {};
  const filtered = mockLetters.filter(letter => 
    !category || letter.category === category
  );
  
  res.json({
    success: true,
    count: filtered.length,
    data: filtered
  });
});

app.get('/api/quiz', (req, res) => {
  res.json({
    success: true,
    count: mockQuizQuestions.length,
    data: mockQuizQuestions
  });
});

app.get('/api/miss-you/random', (req, res) => {
  const randomIndex = Math.floor(Math.random() * mockMissYouMessages.length);
  res.json({
    success: true,
    data: mockMissYouMessages[randomIndex]
  });
});

app.get('/api/memories', (req, res) => {
  res.json({
    success: true,
    count: 0,
    data: []
  });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'TwoYearsWithYojit API is running (Demo Mode)' });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log('Demo mode: No MongoDB required');
});
