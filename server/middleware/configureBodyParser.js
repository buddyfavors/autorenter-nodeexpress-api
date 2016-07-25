'use strict';

const bodyParser = require('body-parser');

function configureBodyParser(app) {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
}

module.exports = configureBodyParser;
