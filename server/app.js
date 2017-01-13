'use strict';

const apiPrefix = '/api/';
const express = require('express');
const app = module.exports = express();

const configureLogger = require('./middleware/configureLogger');
const configureBodyParser = require('./middleware/configureBodyParser');
const configureCors = require('./middleware/configureCors');
const errorHandlingConfigurer = require('./middleware/errorHandlingConfigurer');
const configureRequestUrl = require('./middleware/configureRequestUrl');
const configureVersionHeaderTags = require('./middleware/configureVersionHeaderTags');
const routes = require('./routes');

configureLogger(app);
configureBodyParser(app);
configureCors(app);
configureRequestUrl(app);
configureVersionHeaderTags(app);

app.use(apiPrefix, routes);

// Note: this must go LAST, after the other handlers/routes have been configured.
// Please see https://expressjs.com/en/guide/error-handling.html for details.
errorHandlingConfigurer.configureErrorHandling(app);
