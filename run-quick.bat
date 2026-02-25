@echo off
echo ========================================
echo TwoYearsWithYojit - Quick Run
echo ========================================
echo.

REM Check if MongoDB is running
netstat -ano | findstr :27017 >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] MongoDB is not running!
    echo Please start MongoDB first:
    echo 1. Open Command Prompt as Administrator
    echo 2. Run: mongod --dbpath "C:\data\db"
    pause
    exit /b 1
)

echo [✓] MongoDB is running
echo.

REM Start Backend
echo [1/2] Starting Backend Server...
cd backend
start "Backend Server" cmd /k "powershell -ExecutionPolicy Bypass -Command \"npm run dev\""

REM Wait for backend to start
timeout /t 3 >nul

REM Start Frontend
echo [2/2] Starting Frontend...
cd ../frontend
start "Frontend Server" cmd /k "powershell -ExecutionPolicy Bypass -Command \"npm run dev\""

echo.
echo ========================================
echo 🎉 Application Running!
echo ========================================
echo.
echo Backend: http://localhost:5000
echo Frontend: http://localhost:5173
echo Login Password: 260224
echo.
echo Opening browser...
timeout /t 5 >nul
start http://localhost:5173

echo.
echo All servers are running in separate windows.
echo Close those windows to stop.
pause
