# TODO: Switch to an offical alpine-node when one is made or create our own Fusion alpine image
FROM mhart/alpine-node:6.1.0

MAINTAINER Fusion Alliance <code@fusionalliance.com>

RUN mkdir -p /home/api
ENV HOME=/home/api
WORKDIR $HOME

COPY package.json $HOME/package.json
RUN npm install; npm install -g pm2@1.1.3

COPY . $HOME/

EXPOSE 3000

RUN npm run init

CMD ["npm", "start"]
