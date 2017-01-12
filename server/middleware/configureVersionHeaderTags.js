'use strict';
const environment = require('../environment/environment');

function configureVersionHeaderTags(app) {
  app.use((request, response, next) => {
    environment.then((environmentModel) => {
      response.setHeader('api-version', environmentModel.version);
      response.setHeader('api-build-number', environmentModel.build);
      next();
    });
  });
}

module.exports = configureVersionHeaderTags;
