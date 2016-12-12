'use strict';

const app = require('./app');
const http = require('http');
const config = require('./config');
const logger = require('./services/logger');

logger.info('Starting AutoRenter Node-Express API.');
const port = config.server.port;
app.set('port', port);

const server = http.createServer(app);
server.listen(port);

process.on('uncaughtException', (err) => {
  logger.error(err);
});
