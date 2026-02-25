# Render Deployment Guide for TwoYearsWithYojit

## 🚀 Deploy to Render.com

### Step 1: Prepare Your Code

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/twoyearswithyojit.git
   git push -u origin main
   ```

### Step 2: Deploy Backend (Node.js API)

1. Go to [render.com](https://render.com) and sign up/login
2. Click **"New +"** → **"Web Service"**
3. Connect your GitHub repository
4. Configure:
   - **Name**: `twoyearswithyojit-backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Free

5. **Add Environment Variables**:
   ```
   MONGODB_URI=mongodb+srv://your_mongodb_uri
   JWT_SECRET=your_super_secret_jwt_key_here
   JWT_EXPIRE=7d
   ADMIN_PASSWORD=260224
   NODE_ENV=production
   ```

6. Click **"Create Web Service"**

### Step 3: Deploy Frontend (React Static Site)

1. Click **"New +"** → **"Static Site"**
2. Connect same repository
3. Configure:
   - **Name**: `twoyearswithyojit-frontend`
   - **Build Command**: `cd frontend && npm install && npm run build`
   - **Publish Directory**: `frontend/dist`
   - **Plan**: Free

4. **Add Environment Variables**:
   ```
   VITE_API_URL=https://twoyearswithyojit-backend.onrender.com/api
   ```

5. Click **"Create Static Site"**

### Step 4: Update Backend CORS

Make sure your backend `server.js` allows the frontend URL:

```javascript
app.use(cors({
  origin: 'https://twoyearswithyojit-frontend.onrender.com',
  credentials: true
}));
```

### Step 5: MongoDB Atlas Setup

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Get your connection string
4. Add to Render environment variables as `MONGODB_URI`

## 🎯 Your Deployed URLs

- **Frontend**: `https://twoyearswithyojit-frontend.onrender.com`
- **Backend API**: `https://twoyearswithyojit-backend.onrender.com`
- **Login Password**: `260224`

## 🔧 Important Notes

- Free tier services sleep after 15 minutes of inactivity
- First request may take 30-60 seconds to wake up
- MongoDB Atlas free tier has limitations but works perfectly
- No credit card required for free tier

## 📱 Access Your Live App

Once deployed, share the frontend URL with Yojit! The app will be live 24/7 with automatic deployments when you push code changes.

Happy Anniversary! 💕
