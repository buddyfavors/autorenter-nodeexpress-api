'use strict';

const apiPrefix = '/api/';
const express = require('express');
const app = module.exports = express();

const configureBodyParser = require('./middleware/configureBodyParser');
const configureCors = require('./middleware/configureCors');
const configureRequestUrl = require('./middleware/configureRequestUrl');
const routes = require('./routes');

configureBodyParser(app);
configureCors(app);
configureRequestUrl(app);

app.use(apiPrefix, routes);
