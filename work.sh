#/bin/bash

cd mandela-tribute
npm install -y
npm run build
docker build .
docker run -itd -p 8080:80 $(docker ps -aq)