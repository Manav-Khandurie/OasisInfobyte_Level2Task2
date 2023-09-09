#/bin/bash

sudo apt update -y
sudo apt install -y docker.io
sudo systemctl start docker
sudo systemctl enable docker
docker build .
docker run -itd -p 8080:80 $(docker images -q)