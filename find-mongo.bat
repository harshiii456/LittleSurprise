@echo off
echo ========================================
echo MongoDB Finder for TwoYearsWithYojit
echo ========================================
echo.

echo Checking common MongoDB installation paths...

REM Check Program Files
if exist "C:\Program Files\MongoDB\Server\bin\mongod.exe" (
    echo [✓] Found MongoDB at: C:\Program Files\MongoDB\Server\bin\mongod.exe
    set "MONGO_PATH=C:\Program Files\MongoDB\Server\bin\mongod.exe"
    goto :found
)

REM Check Program Files (x86)
if exist "C:\Program Files (x86)\MongoDB\Server\bin\mongod.exe" (
    echo [✓] Found MongoDB at: C:\Program Files (x86)\MongoDB\Server\bin\mongod.exe
    set "MONGO_PATH=C:\Program Files (x86)\MongoDB\Server\bin\mongod.exe"
    goto :found
)

REM Check AppData
if exist "%APPDATA%\MongoDB\Server\bin\mongod.exe" (
    echo [✓] Found MongoDB at: %APPDATA%\MongoDB\Server\bin\mongod.exe
    set "MONGO_PATH=%APPDATA%\MongoDB\Server\bin\mongod.exe"
    set MONGO_PATH="%APPDATA%\MongoDB\Server\bin\mongod.exe"
    goto :found
)

REM Search entire C: drive
echo Searching C: drive for mongod.exe...
for /r C:\ %%f in (mongod.exe) do (
    if exist "%%f" (
        echo [✓] Found MongoDB at: %%f
        set MONGO_PATH=%%f
        goto :found
    )
)

:found
if defined MONGO_PATH (
    echo.
    echo MongoDB found at: %MONGO_PATH%
    echo.
    echo Creating data directory...
    if not exist "C:\data\db" mkdir "C:\data\db"
    
    echo.
    echo Starting MongoDB...
    start "MongoDB Server" "%MONGO_PATH%" --dbpath "C:\data\db"
    
    echo.
    echo MongoDB is starting in background window.
    echo You can now run the application!
    echo.
    echo Next steps:
    echo 1. Open a NEW terminal window
    echo 2. Run: cd backend ^&^& npm run seed ^&^& npm run dev
    echo 3. Open another terminal and run: cd frontend ^&^& npm run dev
    echo 4. Access: http://localhost:5000 (or 5173 for frontend)
    echo.
) else (
    echo [ERROR] MongoDB not found!
    echo.
    echo Please install MongoDB from: https://www.mongodb.com/try/download/community
    echo.
    echo After installation, run this script again.
)

pause
