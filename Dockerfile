FROM mhart/alpine-node:6.1.0

MAINTAINER Fusion Alliance <code@fusionalliance.com>

RUN mkdir -p /home/api
ENV HOME=/home/api
WORKDIR $HOME

COPY package.json $HOME/package.json
RUN npm install

COPY . $HOME/

EXPOSE 3000

CMD ["npm", "start"]
