'use strict';

const apiPrefix = '/api/';
const express = require('express');
const app = module.exports = express();

const configureBodyParser = require('./middleware/configureBodyParser');
const configureCors = require('./middleware/configureCors');
const routes = require('./routes');

configureBodyParser(app);
configureCors(app);

// TODO: Move this? Would this be considered middleware?
app.use(function(request, response, next) {
  request.getUrl = function() {
    return `${request.protocol}://${request.get('host')}${request.originalUrl}`;
  };

  return next();
});

app.use(apiPrefix, routes);
