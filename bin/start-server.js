#!/usr/bin/env node
'use strict';

const app = require('../server/app');
const debug = require('debug')('api');
const http = require('http');
const config = require('../server/config');

debug('Starting Express application.');
let port = config.server.port;
app.set('port', port);

let server = http.createServer(app);
server.listen(port);

process.on('uncaughtException', function(err) {
  debug(err);
});
