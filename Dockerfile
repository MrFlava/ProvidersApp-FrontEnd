FROM node:10.19.0-alpine as build

WORKDIR /epam_frontend
COPY package.json .

RUN npm install
COPY . .
EXPOSE 9000
CMD ["npm", "run", "dev"]
CMD ["npm", "run", "serve"]
