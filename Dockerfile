FROM node:20-alpine3.19

WORKDIR /app

COPY mint.js ./
COPY configs.json ./
COPY package*.json ./

RUN npm i

CMD ["node", "mint.js"]