'use strict';

const express = require('express');
const pkgJSON = require('../../package.json');

function getRoot(request, response) {
  const app = express();
  const env = app.get('env');

  response.status(200).json({
    title: pkgJSON.description,
    environment: env,
    version: pkgJSON.version
  });
}

module.exports = getRoot;
