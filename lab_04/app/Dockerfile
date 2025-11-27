FROM node:22

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

#init database
RUN npm run init_db

EXPOSE 3001 3002 3003

CMD ["node", "server.js"]