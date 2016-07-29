'use strict';

const express = require('express');

const configureBodyParser = require('./middleware/configureBodyParser');
const configureCors = require('./middleware/configureCors');
const routes = require('./routes/index');

const app = express();

configureBodyParser(app);
configureCors(app);

app.use(routes);

module.exports = app;
