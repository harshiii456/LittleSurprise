@echo off
echo ========================================
echo Starting TwoYearsWithYojit with MongoDB
echo ========================================
echo.

echo [1/3] Starting MongoDB...
REM Try common MongoDB paths
if exist "C:\Program Files\MongoDB\Server\bin\mongod.exe" (
    start "MongoDB" "C:\Program Files\MongoDB\Server\bin\mongod.exe" --dbpath "C:\data\db"
    echo [✓] MongoDB started from Program Files
) else if exist "C:\Program Files (x86)\MongoDB\Server\bin\mongod.exe" (
    start "MongoDB" "C:\Program Files (x86)\MongoDB\Server\bin\mongod.exe" --dbpath "C:\data\db"
    echo [✓] MongoDB started from Program Files (x86)
) else (
    echo [ERROR] MongoDB not found in standard locations!
    echo Please find mongod.exe and update this script
    echo Common locations:
    echo - C:\Program Files\MongoDB\Server\bin\
    echo - C:\Program Files (x86)\MongoDB\Server\bin\
    pause
    exit /b 1
)

REM Wait for MongoDB to start
timeout /t 5 >nul

echo [2/3] Starting Backend Server...
cd backend
start "Backend Server" cmd /k "npm run seed && npm run dev"

REM Wait for backend to start
timeout /t 3 >nul

echo [3/3] Starting Frontend...
cd ../frontend
start "Frontend Server" cmd /k "npm run dev"

echo.
echo ========================================
echo 🎉 Application Starting!
echo ========================================
echo.
echo MongoDB: Running in background
echo Backend: http://localhost:5000
echo Frontend: http://localhost:5173
echo Login Password: 260224
echo.
echo Opening application in browser...
timeout /t 3 >nul
start http://localhost:5173

echo.
echo All servers are running!
echo Close the server windows to stop the application.
pause
