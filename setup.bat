@echo off
echo ========================================
echo Two Years With Yojit - Setup Script
echo ========================================
echo.

echo Checking prerequisites...

:: Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Node.js is not installed!
    echo Please download and install Node.js from: https://nodejs.org/
    echo After installation, restart your computer and run this script again.
    pause
    exit /b 1
) else (
    echo [✓] Node.js is installed
)

:: Check if npm is available
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] npm is not available!
    pause
    exit /b 1
) else (
    echo [✓] npm is available
)

:: Check if MongoDB is installed
mongod --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] MongoDB is not installed!
    echo Please download and install MongoDB from: https://www.mongodb.com/try/download/community
    echo After installation, restart your computer and run this script again.
    pause
    exit /b 1
) else (
    echo [✓] MongoDB is installed
)

echo.
echo All prerequisites are installed! Setting up the application...
echo.

:: Setup Backend
echo [1/4] Setting up backend...
cd backend
call npm install
if %errorlevel% neq 0 (
    echo [ERROR] Backend npm install failed!
    pause
    exit /b 1
)
echo [✓] Backend dependencies installed

:: Seed Database
echo [2/4] Seeding database...
call npm run seed
if %errorlevel% neq 0 (
    echo [ERROR] Database seeding failed!
    pause
    exit /b 1
)
echo [✓] Database seeded successfully

:: Start Backend Server
echo [3/4] Starting backend server...
start "Backend Server" cmd /k "npm run dev"

:: Wait a moment for backend to start
timeout /t 3 >nul

:: Setup Frontend
echo [4/4] Setting up frontend...
cd ../frontend
call npm install
if %errorlevel% neq 0 (
    echo [ERROR] Frontend npm install failed!
    pause
    exit /b 1
)
echo [✓] Frontend dependencies installed

:: Start Frontend
echo Starting frontend server...
start "Frontend Server" cmd /k "npm run dev"

echo.
echo ========================================
echo 🎉 Setup Complete!
echo ========================================
echo.
echo Application is starting...
echo.
echo Frontend: http://localhost:5173
echo Backend:  http://localhost:5000
echo Login Password: 260224
echo.
echo Press any key to open the application in your browser...
pause >nul
start http://localhost:5173

echo.
echo Both servers are running in separate windows.
echo Close those windows to stop the application.
pause
