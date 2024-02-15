FROM node:20.9.0-alpine3.17

WORKDIR /app

COPY package*.json ./
RUN npm i

COPY tsconfig.json ./tsconfig.json
COPY .env ./.env
COPY src ./src 

CMD npm start