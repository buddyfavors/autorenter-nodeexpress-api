FROM node:latest

MAINTAINER Fusion Alliance code@fusionalliance.com

# Work around for NPM install: https://github.com/npm/npm/issues/9863
RUN cd $(npm root -g)/npm \
  && npm install fs-extra \
  && sed -i -e s/graceful-fs/fs-extra/ -e s/fs.rename/fs.move/ ./lib/utils/rename.js

RUN useradd --user-group --create-home --shell /bin/false api; \
    npm install -g npm@3.8.8 &&\
    npm install -g nodemon

ENV HOME=/home/api

COPY package.json $HOME/
RUN chown -R api:api $HOME/*

USER api
WORKDIR $HOME
RUN npm install

USER root
COPY . $HOME
RUN chown -R api:api $HOME/*
USER api

EXPOSE 3000

CMD ["npm", "start"]
