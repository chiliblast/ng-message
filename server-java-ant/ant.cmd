@echo off
setlocal
set "DIRNAME=%~dp0"
if "%DIRNAME%" == "" set "DIRNAME=."
set "ANT_HOME=%DIRNAME%apache-ant-1.10.14"

if not defined JAVA_HOME (
    if exist "C:\Program Files\Java\jdk-17" (
        set "JAVA_HOME=C:\Program Files\Java\jdk-17"
    )
)

call "%ANT_HOME%\bin\ant.bat" %*
endlocal
