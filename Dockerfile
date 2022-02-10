FROM node:16-alpine

MAINTAINER Dimanno

RUN mkdir /app
WORKDIR /app

COPY ./server/package.json /app
COPY ./server/package-lock.json /app

RUN npm install

COPY . .

COPY /server/dist ./dist

CMD ['npm', 'run','start:dev']
