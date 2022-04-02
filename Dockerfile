FROM node:12-alpine

WORKDIR /home/node/app

COPY . /home/node/app

RUN yarn

EXPOSE 3000

CMD ["yarn", "start"]