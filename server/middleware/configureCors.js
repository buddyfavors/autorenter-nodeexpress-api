'use strict';

const cors = require('cors');

function configureCors(app) {
  app.use(cors({
    origin: [
      'http://127.0.0.1:3000',
      'http://127.0.0.1:8080',
      'https://autorenter-angular1.herokuapp.com',
      'https://autorenter-nodeexpress-api.herokuapp.com'
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
    preflightContinue: true
  }));
}

module.exports = configureCors;
