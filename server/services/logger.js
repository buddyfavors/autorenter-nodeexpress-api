'use strict';

const winston = require('winston');
const config = require('../config');

const tsFormat = () => (new Date()).toLocaleTimeString();

const logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({
      timestamp: tsFormat,
      colorize: true,
      handleExceptions: true,
      json: false,
      level: config.server.loggerLevel
    })
  ],
  exitOnError: false
});

logger.stream = {
  write: function(message){
    // This is used by morgan to log incoming requests
    logger.info(message);
  }
};

module.exports = logger;
