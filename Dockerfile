FROM node:12-alpine

WORKDIR /home/node/app

COPY . /home/node/app

RUN yarn && \
yarn build &&\
yarn global add serve

EXPOSE 3000

CMD ["serve", "-s", "build"]