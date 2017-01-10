'use strict';

const environment = require('../environment/environment');

function getRoot(request, response) {
  environment.then((env) =>
    response.status(200).json({
      title: env.title,
      environment: env.environment,
      version: env.version,
      build: env.build
    }));
}

module.exports = getRoot;
