'use strict';

const morgan = require('morgan');
const logger = require('../services/logger');

function configureLogger(app) {
  app.use(require('morgan')("combined", { "stream": logger.stream }));
}

module.exports = configureLogger;
