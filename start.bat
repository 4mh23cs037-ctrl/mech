@echo off
echo ========================================================
echo  MIT Mysore - Additive Manufacturing & 3D Printing Portal
echo  Department of Mechanical Engineering
echo ========================================================
echo.
echo Starting FastAPI Backend Server on port 8000...
start cmd /k "cd backend && python -m uvicorn main:app --host 0.0.0.0 --port 8000 --reload"

echo Starting Vite React Frontend on port 5173...
start cmd /k "cd client && npm run dev"

echo.
echo Application is launching!
echo Frontend: http://localhost:5173
echo Backend API & Swagger Docs: http://localhost:8000/docs
echo ========================================================

