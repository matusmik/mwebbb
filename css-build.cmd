@echo off
rem Vygeneruje styles.css z tried Tailwindu vo vsetkych .html suboroch.
rem Spusti po kazdej zmene tried v HTML (dvojklik alebo v terminali: .\css-build.cmd).
cd /d "%~dp0"
if not exist tools\tailwindcss.exe (
  echo Stahujem Tailwind CLI v3.4.17...
  mkdir tools 2>nul
  curl -sL -o tools\tailwindcss.exe https://github.com/tailwindlabs/tailwindcss/releases/download/v3.4.17/tailwindcss-windows-x64.exe
)
tools\tailwindcss.exe -c tailwind.config.js -i tailwind-input.css -o styles.css --minify
