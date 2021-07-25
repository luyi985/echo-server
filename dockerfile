FROM node:alpine3.10
RUN mkdir /app
ENV PORT 3000
WORKDIR /app
COPY dist ./dist
COPY src ./src
ADD .env ./
ADD *.json ./
RUN npm install
EXPOSE $PORT
CMD npm run prod
