FROM node:20

WORKDIR /app/project

COPY package*.json .

RUN npm install
RUN npm install -g nodemon

COPY . .

EXPOSE 2001

ENV PORT=2001

CMD ["npm", "start"]