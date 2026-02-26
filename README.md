# Two Years 💕

A romantic anniversary web application celebrating 2 years of love.

## 🎯 Project Overview

This is a private, password-protected anniversary website that captures the beautiful journey of a long-distance relationship. The app features an interactive timeline, love letters, photo gallery, quiz, and many romantic surprises.

### Key Features

- 🔐 **Secure Authentication**: Password-protected with JWT
- 📱 **Fully Responsive**: Works beautifully on all devices
- 🎨 **Romantic Design**: Playful yet mature aesthetic with animations
- 📊 **Interactive Timeline**: Animated milestones of your love story
- 💌 **Love Letters**: Typewriter animations with hidden messages
- 🖼️ **Photo Gallery**: Masonry layout with modal views
- 🎮 **Love Quiz**: Test your knowledge with confetti celebrations
- 📍 **Distance Tracker**: Live counters and interactive map
- 📮 **Open When Cards**: Letters for different emotional moments
- 🎬 **Final Surprise**: Locked section with video component

## 🛠 Tech Stack

### Frontend
- **React 18** with Vite
- **TailwindCSS** for styling
- **Framer Motion** for animations
- **React Router DOM** for navigation
- **Axios** for API calls
- **React Confetti** for celebrations
- **Lucide React** for icons

### Backend
- **Node.js** with Express.js
- **MongoDB** with Mongoose
- **JWT** for authentication
- **bcryptjs** for password hashing
- **dotenv** for environment variables
- **CORS** for cross-origin requests

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd TwoYearsWithYojit
```

2. **Backend Setup**
```bash
cd backend
npm install
```

3. **Environment Variables**
Create a `.env` file in the backend directory:
```env
# MongoDB Configuration
MONGODB_URI=mongodb://localhost:27017/twoyearswithyojit

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key_here_make_it_long_and_random
JWT_EXPIRE=7d

# Server Configuration
PORT=5000
NODE_ENV=development

# Admin Password
ADMIN_PASSWORD=260224
```

4. **Seed the Database**
```bash
npm run seed
```

5. **Start Backend Server**
```bash
npm run dev
```

6. **Frontend Setup**
```bash
cd ../frontend
npm install
```

7. **Start Frontend Development Server**
```bash
npm run dev
```

8. **Access the Application**
- Frontend: http://localhost:5173
- Backend API: http://localhost:5000
- Login Password: `260224`

## 📁 Project Structure

```
TwoYearsWithYojit/
├── backend/
│   ├── config/
│   │   └── db.js                 # Database connection
│   ├── controllers/
│   │   ├── authController.js    # Authentication logic
│   │   ├── lettersController.js # Letters API
│   │   ├── memoriesController.js # Memories API
│   │   ├── missYouController.js # Miss you messages API
│   │   ├── quizController.js    # Quiz API
│   │   └── timelineController.js # Timeline API
│   ├── middleware/
│   │   └── auth.js              # JWT middleware
│   ├── models/
│   │   ├── User.js               # User schema
│   │   ├── Letter.js             # Letter schema
│   │   ├── Memory.js             # Memory schema
│   │   ├── MissYouMessage.js     # Miss you message schema
│   │   ├── QuizQuestion.js       # Quiz question schema
│   │   └── TimelineEvent.js     # Timeline event schema
│   ├── routes/
│   │   ├── auth.js               # Authentication routes
│   │   ├── letters.js            # Letters routes
│   │   ├── memories.js           # Memories routes
│   │   ├── missYou.js            # Miss you routes
│   │   ├── quiz.js               # Quiz routes
│   │   └── timeline.js           # Timeline routes
│   ├── seed.js                   # Database seeding script
│   ├── server.js                 # Main server file
│   └── package.json
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── HeartParticles.jsx
│   │   │   └── Navbar.jsx
│   │   ├── context/
│   │   │   └── AuthContext.jsx
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── Timeline.jsx
│   │   │   ├── Distance.jsx
│   │   │   ├── Letters.jsx
│   │   │   ├── Gallery.jsx
│   │   │   ├── Quiz.jsx
│   │   │   ├── OpenWhen.jsx
│   │   │   └── Final.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── postcss.config.js
└── README.md
```

## 🔐 Authentication

The application uses a simple password-based authentication system:
- **Default Password**: `` (February 26, 2024)
- Password is hashed using bcrypt
- JWT tokens for session management
- Protected routes for all main content

## 🎨 Design Features

### Color Palette
- **Blush Pink** (#FFE5EC, #FFB6C1)
- **Warm Beige** (#F5E6D3)
- **Cream** (#FFF8F0)
- **Deep Navy** (#2C3E50)

### Typography
- **Georgia** serif for headings
- **Dancing Script** for romantic accents

### Animations
- Floating heart particles
- Smooth fade transitions
- Hover effects and micro-interactions
- Confetti celebrations
- Typewriter text effects

## 📱 Pages & Features

### 1. Login Page
- Romantic gradient background
- Floating heart animations
- Secure password input
- Smooth login transitions

### 2. Home Page
- Hero section with animated title
- Background music toggle
- Live statistics counters
- Welcome message

### 3. Timeline
- Vertical animated timeline
- Expandable milestone cards
- Hidden "What I Was Thinking" sections
- Chronological journey

### 4. Distance Page
- Interactive world map
- Punjab to Bangalore visualization
- Live distance counters
- "Miss Me" button with random messages

### 5. Letters Page
- Three categories: Reasons, Unsaid, Promises
- Typewriter animation effect
- Hidden clickable heart
- Tabbed navigation

### 6. Quiz Page
- Interactive questions
- Progress bar
- Score tracking
- Confetti for perfect scores

### 7. Open When Cards
- Five emotional scenarios
- Animated card reveals
- Modal letter displays
- Persistent open state

### 8. Final Page
- Promise-based unlock
- Video component placeholder
- Fade-to-black transition
- Final anniversary message

## 🔧 Customization

### Changing Password
1. Update `ADMIN_PASSWORD` in backend `.env`
2. Re-run `npm run seed` or update manually in database

### Adding Content
1. Use the API endpoints to add new memories, letters, etc.
2. Or modify the `seed.js` file and re-run seeding

### Customizing Colors
Update the color palette in `frontend/tailwind.config.js` and `frontend/src/index.css`

## 📦 Deployment

### Backend Deployment
```bash
# Build for production
npm start

# Use environment variables for production
NODE_ENV=production
```

### Frontend Deployment
```bash
# Build for production
npm run build

# Deploy the dist/ folder to your hosting service
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is a private anniversary gift. Please respect the personal nature of this application.


Yojit, this website is a celebration of our beautiful journey together. Every line of code, every animation, every word was written with love. Thank you for two amazing years, and here's to many more.

I love you more than words can express. ❤️

---

*Built with love by Harshita for Yojit Patni*
# LittleSurprise
