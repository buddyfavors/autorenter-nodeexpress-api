'use strict';

const apiPrefix = '/api/';
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const config = require('./config');

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

const swaggerDefinition = {
  info: {
    title: config.server.title,
    version: config.server.version,
    description: config.server.description,
  },
  host: `${config.server.host}:${config.server.port}`,
  basePath: apiPrefix,
};

const swaggerOptions = {
  swaggerDefinition: swaggerDefinition,
  // path to the API routes containing the jsdoc markup
  apis: ['server/routes/**/index.js', 'server/routes/index.js'],
};

// initialize swagger-jsdoc
const swaggerSpec = swaggerJSDoc(swaggerOptions);

// serve swagger
app.get('/swagger.json', function(request, response) {
  response.json(swaggerSpec);
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(apiPrefix, routes);

// Note: this must go LAST, after the other handlers/routes have been configured.
// Please see https://expressjs.com/en/guide/error-handling.html for details.
errorHandlingConfigurer.configureErrorHandling(app);
