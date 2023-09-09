FROM node:latest

RUN cd mandela-tribute && npm i

FROM nginx:latest

COPY /mandela-tribute/build/. /usr/share/nginx/html