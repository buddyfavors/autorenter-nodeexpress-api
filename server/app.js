'use strict';

const express = require('express');

const configureBodyParser = require('./middleware/configureBodyParser');
const configureCors = require('./middleware/configureCors');
const errorHandlingConfigurer = require('./middleware/errorHandlingConfigurer');
const routes = require('./routes/index');

const app = express();

configureBodyParser(app);
configureCors(app);

app.use(routes);

// Note: this must go LAST, after the other handlers/routes have been configured.
// Please see https://expressjs.com/en/guide/error-handling.html for details.
errorHandlingConfigurer.configureErrorHandling(app);

module.exports = app;
