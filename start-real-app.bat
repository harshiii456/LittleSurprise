@echo off
echo ========================================
echo Starting TwoYearsWithYojit with Real MongoDB
echo ========================================
echo.

echo [1/3] Please start MongoDB manually...
echo.
echo Instructions:
echo 1. Find mongod.exe on your computer
echo 2. Open Command Prompt as Administrator
echo 3. Run: mongod --dbpath "C:\data\db"
echo.
echo Press any key when MongoDB is running...
pause

REM Wait for user to start MongoDB
echo.
echo [2/3] Starting Backend Server...
cd backend
start "Backend Server" cmd /k "npm run seed && npm run dev"

echo.
echo [3/3] Starting Frontend...
cd ../frontend
start "Frontend Server" cmd /k "npm run dev"

echo.
echo ========================================
echo 🎉 Application Ready!
echo ========================================
echo.
echo Backend: http://localhost:5000
echo Frontend: http://localhost:5173
echo Login Password: 260224
echo.
echo Opening application in browser...
timeout /t 3 >nul
start http://localhost:5173

echo.
echo All servers are running!
echo Close their windows to stop the application.
pause
