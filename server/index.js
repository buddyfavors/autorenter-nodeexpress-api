'use strict';

const app = require('./app');
const debug = require('debug')('api');
const http = require('http');
const config = require('./config');

debug('Starting AutoRenter Node-Express API.');
const port = config.server.port;
app.set('port', port);

const server = http.createServer(app);
server.listen(port);

process.on('uncaughtException', (err) => {
  debug(err);
});
