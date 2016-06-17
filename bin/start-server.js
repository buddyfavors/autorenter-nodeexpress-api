#!/usr/bin/env node
'use strict';

const app = require('../server/app');
const debug = require('debug')('api');
const http = require('http');
const config = require('../server/config');

debug('Starting Express application.');
const port = config.server.port;
app.set('port', port);

const server = http.createServer(app);
server.listen(port);

process.on('uncaughtException', err => {
  debug(err);
});
