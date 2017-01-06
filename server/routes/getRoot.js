'use strict';

const enviornment = require('../enviornment/enviornment');

function getRoot(request, response) {
  enviornment.then((env) =>
    response.status(200).json({
      title: env.title,
      environment: env.environment,
      version: env.version,
      build: env.build
    }));
}

module.exports = getRoot;
