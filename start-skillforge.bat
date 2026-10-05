@echo off
cd /d "%~dp0"
call npm run dev -- --open --host 127.0.0.1
pause
