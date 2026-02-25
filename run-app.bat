@echo off
echo ========================================
echo TwoYearsWithYojit - Quick Start
echo ========================================
echo.

echo [1/2] Starting Backend Server...
cd backend
start "Backend Server" cmd /k "node server-no-mongo.js"

echo [2/2] Starting Frontend...
cd ../frontend
start "Frontend Server" cmd /k "npm run dev"

echo.
echo ========================================
echo 🎉 Application Starting!
echo ========================================
echo.
echo Backend: http://localhost:5002
echo Frontend: http://localhost:5173
echo Login Password: 260224
echo.
echo Opening application in browser...
timeout /t 5 >nul
start http://localhost:5173

echo.
echo Both servers are running!
echo Close their windows to stop the application.
pause
