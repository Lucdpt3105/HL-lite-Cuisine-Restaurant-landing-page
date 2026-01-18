@echo off
echo ========================================
echo Elite Cuisine Restaurant - Django Backend
echo ========================================
echo.

REM Activate virtual environment
echo [1/3] Activating virtual environment...
call .venv\Scripts\activate.bat

REM Run migrations
echo.
echo [2/3] Applying database migrations...
python manage.py migrate

REM Start server
echo.
echo [3/3] Starting Django development server...
echo.
echo ========================================
echo Server will start at: http://localhost:8000
echo Admin panel: http://localhost:8000/admin
echo API endpoints: http://localhost:8000/api
echo ========================================
echo.
echo Press CTRL+C to stop the server
echo.
python manage.py runserver
