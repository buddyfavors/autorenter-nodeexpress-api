'use strict';

const cors = require('cors');

function configureCors(app) {
  app.use(cors({
    origin: ['http://127.0.0.1:3000', 'http://127.0.0.1'],
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
    preflightContinue: true
  }));
}

module.exports = configureCors;
