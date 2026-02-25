# Static Deployment Guide for TwoYearsWithYojit

## 🚀 Deploy Frontend as Static Site

This guide deploys just the React frontend to static hosting. The app will use mock data (no backend server needed).

### Option 1: Netlify (Recommended)

#### Step 1: Build the Frontend

1. Update API URL to use mock data:
   Edit `frontend/.env`:
   ```
   VITE_API_URL=/mock-api
   ```

2. Install dependencies:
   ```bash
   cd frontend
   npm install
   ```

3. Build for production:
   ```bash
   npm run build
   ```

#### Step 2: Create Netlify Configuration

Create `netlify.toml` in root:

```toml
[build]
  base = "frontend"
  publish = "dist"
  command = "npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

#### Step 3: Deploy to Netlify

**Option A: Drag & Drop**
1. Go to [netlify.com](https://netlify.com)
2. Sign up/login
3. Drag the `frontend/dist` folder to deploy
4. Done! You get a free URL instantly

**Option B: GitHub Integration**
1. Push code to GitHub
2. Connect repo to Netlify
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Auto-deploys on every push!

### Option 2: Vercel

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   cd frontend
   vercel
   ```

3. Follow prompts - done!

### Option 3: GitHub Pages

1. Update `frontend/vite.config.js`:
   ```javascript
   export default defineConfig({
     base: '/twoyearswithyojit/',  // Your repo name
     plugins: [react()],
   })
   ```

2. Build and push `dist` folder to GitHub

3. Enable GitHub Pages in repository settings

## 🎯 With Mock Data (No Backend)

Since you're deploying static, let's use the demo data approach:

I've already created `frontend/src/mockData.js` with all the romantic content:
- Timeline events
- Love letters
- Quiz questions
- Miss-you messages
- Gallery photos

The app will work completely offline with all features!

## 📱 Your Live Site

After deployment, you'll get a URL like:
- `https://twoyearswithyojit.netlify.app`
- `https://twoyearswithyojit.vercel.app`
- `https://yourusername.github.io/twoyearswithyojit`

**Password**: `260224`

## ✅ Features Working Statically

- ✨ Login with romantic animations
- 📅 Full timeline with all milestones
- 💌 All love letters with typewriter effects
- 🖼️ Gallery with photos
- 🎮 Complete quiz with confetti
- 📍 Distance tracker
- 📮 Open-when cards
- 🎬 Final surprise page

## 🚀 Quick Deploy (30 seconds)

```bash
# Build
cd frontend
npm run build

# Deploy to Netlify (drag dist folder to netlify.com)
# OR use Netlify CLI:
npx netlify deploy --dir=dist --prod
```

**Free forever, no backend needed, instant deployment!** 💕
