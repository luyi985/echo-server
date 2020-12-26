FROM node:alpine3.10
RUN mkdir /app
ENV PORT 3000
WORKDIR /app
COPY dist ./dist
COPY .env .
COPY package.json .
RUN npm install
EXPOSE ${PORT}
CMD npm run prod
