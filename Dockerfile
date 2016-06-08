# TODO: Switch to an offical alpine-node when one is made or create our own Fusion alpine image
FROM mhart/alpine-node:6.1.0

MAINTAINER Fusion Alliance <code@fusionalliance.com>

ENV DEBUG=api,server,sql
ENV HOME=/home/api

RUN mkdir -p $HOME
WORKDIR $HOME

COPY package.json $HOME/package.json
RUN npm install -g nodemon; npm install

COPY . $HOME/

EXPOSE 3000

RUN npm run init

CMD ["npm", "start"]
