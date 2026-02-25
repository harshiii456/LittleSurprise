const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

const app = express();

// CORS configuration for production
const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://littlesurprise.onrender.com', 'https://twoyearswithyojit-frontend.onrender.com']
    : 'http://localhost:5173',
  credentials: true,
  optionsSuccessStatus: 200
};

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.'
});

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(limiter);

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/memories', require('./routes/memories'));
app.use('/api/letters', require('./routes/letters'));
app.use('/api/quiz', require('./routes/quiz'));
app.use('/api/miss-you', require('./routes/missYou'));
app.use('/api/timeline', require('./routes/timeline'));

// Root route
app.get('/', (req, res) => {
  res.json({ 
    message: 'TwoYearsWithYojit API',
    status: 'Running',
    endpoints: [
      'GET /api/health',
      'POST /api/auth/login',
      'GET /api/timeline',
      'GET /api/letters',
      'GET /api/quiz',
      'GET /api/memories',
      'GET /api/miss-you/random'
    ]
  });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'TwoYearsWithYojit API is running' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
