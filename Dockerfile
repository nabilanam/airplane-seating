FROM node:18

WORKDIR /usr/src/app

RUN npm i -g typescript

COPY package*.json ./

RUN npm i

COPY . .

RUN npm run build

EXPOSE 3000

ENTRYPOINT ["npm", "run"]