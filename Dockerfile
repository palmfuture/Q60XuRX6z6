FROM node:18.12.0-alpine

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn

COPY ./ ./

EXPOSE 4000

CMD [ "yarn", "start" ]