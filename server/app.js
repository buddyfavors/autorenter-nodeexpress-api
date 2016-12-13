'use strict';

const apiPrefix = '/api/';
const express = require('express');
const app = module.exports = express();

const configureLogger = require('./middleware/configureLogger');
const configureBodyParser = require('./middleware/configureBodyParser');
const configureCors = require('./middleware/configureCors');
const configureRequestUrl = require('./middleware/configureRequestUrl');
const routes = require('./routes');

configureLogger(app);
configureBodyParser(app);
configureCors(app);
configureRequestUrl(app);

app.use(apiPrefix, routes);
