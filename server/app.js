'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/index');
const cors = require('cors');

const app = express();

function configureBodyParser() {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
}

function configureCors() {
  // TODO: secure me
  app.use(cors({
    origin: ['http://192.168.99.100:3000', 'http://192.168.99.100'],
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
    preflightContinue: true
  }));
}

configureBodyParser();
configureCors();

app.use(routes);

module.exports = app;
