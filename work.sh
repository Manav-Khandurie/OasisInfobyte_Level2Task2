#/bin/bash
sudo su
apt update -y
apt install -y docker.io
systemctl start docker
systemctl enable docker
docker build .
docker run -itd -p 8080:80 $(docker images -q)