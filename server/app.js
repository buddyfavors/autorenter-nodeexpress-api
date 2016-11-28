'use strict';

const express = require('express');
const app = module.exports = express();

const configureBodyParser = require('./middleware/configureBodyParser');
const configureCors = require('./middleware/configureCors');
const routes = require('./routes');

configureBodyParser(app);
configureCors(app);

app.use(routes);
