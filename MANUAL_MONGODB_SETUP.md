# 🚀 Manual MongoDB Setup Guide

## Step 1: Find MongoDB Installation

Since automated search didn't find MongoDB, please manually check these locations:

1. **Open File Explorer** and navigate to:
   - `C:\Program Files\MongoDB\Server\bin\`
   - `C:\Program Files (x86)\MongoDB\Server\bin\`
   - `%APPDATA%\MongoDB\Server\bin\`

2. **Look for `mongod.exe`** file

3. **If found**, copy the full path (e.g., `C:\Program Files\MongoDB\Server\bin\mongod.exe`)

## Step 2: Start MongoDB Manually

1. **Open Command Prompt as Administrator**
2. **Navigate to MongoDB bin directory**:
   ```cmd
   cd "C:\Program Files\MongoDB\Server\bin"
   ```
   (Use your actual path from Step 1)

3. **Create data directory** (if doesn't exist):
   ```cmd
   mkdir C:\data\db
   ```

4. **Start MongoDB**:
   ```cmd
   mongod --dbpath "C:\data\db"
   ```

5. **Keep this window open** - MongoDB is now running!

## Step 3: Run the Application

1. **Open a NEW Command Prompt window**
2. **Navigate to backend**:
   ```cmd
   cd C:\Users\Harshitha Jindal\CascadeProjects\windsurf-project-2\backend
   ```

3. **Run the application**:
   ```cmd
   npm run seed
   npm run dev
   ```

4. **Open a THIRD Command Prompt window**
5. **Navigate to frontend**:
   ```cmd
   cd C:\Users\Harshitha Jindal\CascadeProjects\windsurf-project-2\frontend
   ```

6. **Start frontend**:
   ```cmd
   npm run dev
   ```

## Step 4: Access the Application

- **Backend**: http://localhost:5000
- **Frontend**: http://localhost:5173
- **Login Password**: 260224

## 🎉 Success!

You now have TwoYearsWithYojit running with MongoDB!

## 🔧 If MongoDB Still Not Found

If you can't find MongoDB in any of those locations:
1. **Reinstall MongoDB** from: https://www.mongodb.com/try/download/community
2. **Choose "Complete" installation** (not custom)
3. **Restart your computer**
4. **Try this guide again**

---

**Need help?** The application will work even without MongoDB using the demo mode!
