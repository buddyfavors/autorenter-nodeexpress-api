FROM node:latest
RUN useradd --user-group --create-home --shell /bin/false api &&\
    npm install --global npm@3.8.8

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

EXPOSE API_PORT

CMD ["node", "app.js"]

