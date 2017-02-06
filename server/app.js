'use strict';

const apiPrefix = '/api/';
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const routes = require('./routes');

const app = module.exports = express();

const configureLogger = require('./middleware/configureLogger');
const configureBodyParser = require('./middleware/configureBodyParser');
const configureCors = require('./middleware/configureCors');
const errorHandlingConfigurer = require('./middleware/errorHandlingConfigurer');
const configureRequestUrl = require('./middleware/configureRequestUrl');
const configureVersionHeaderTags = require('./middleware/configureVersionHeaderTags');

configureLogger(app);
configureBodyParser(app);
configureCors(app);
configureRequestUrl(app);
configureVersionHeaderTags(app);

// swagger definition
const swaggerDefinition = {
  info: {
    title: 'AutoRenter API',
    version: '1.0.0',
    description: 'Node.js + Express implementation of the RESTful AutoRenter API.',
  },
  host: 'localhost:3000',
  basePath: '/api/',
};

// options for the swagger docs
const options = {
  // import swaggerDefinitions
  swaggerDefinition: swaggerDefinition,
  // path to the API docs
  apis: ['server/routes/**/index.js'],
};

// initialize swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options);

// serve swagger
app.get('/swagger.json', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(apiPrefix, routes);

// Note: this must go LAST, after the other handlers/routes have been configured.
// Please see https://expressjs.com/en/guide/error-handling.html for details.
errorHandlingConfigurer.configureErrorHandling(app);
