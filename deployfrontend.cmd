xcopy src docs /D /E /F /Y /R
copy build\contracts\ChainList.json docs /Y
git add .
git commit -m "Adding frontend files to Github Pages"
git push