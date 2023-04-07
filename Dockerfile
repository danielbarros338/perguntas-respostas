FROM node:18.13.0-alpine

RUN mkdir -p /usr/src/questionguide
WORKDIR /usr/src/questionguide

COPY .env.development /usr/src/questionguide/
COPY .env.production /usr/src/questionguide/

RUN apk update && apk upgrade
RUN apk add git

COPY . /usr/src/questionguide/
RUN yarn install

EXPOSE 3030

CMD ["yarn", "start"]