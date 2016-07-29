'use strict';

const cors = require('cors');

function configureCors(app) {
  app.use(cors({
    origin: ['http://192.168.99.100:3000', 'http://192.168.99.100'],
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
    preflightContinue: true
  }));
}

module.exports = configureCors;
