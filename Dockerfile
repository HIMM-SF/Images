FROM node:latest

WORKDIR /app

COPY package*.json ./

# COPY package.json /src/app
RUN npm install

COPY . .

EXPOSE 8000

CMD [ "node", "app.js" ]