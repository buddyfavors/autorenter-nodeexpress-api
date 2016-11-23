'use strict';

const express = require('express');
const models = require('../models');
const pkgJSON = require('../../package.json');

function getRoot(request, response, next) {
  models.User.findOne({ where: { username: 'newton' } })
    .then((user) => {
      const app = express();
      const env = app.get('env');

      response.status(200).json({
        user: user.username,
        title: pkgJSON.description,
        environment: env,
        version: pkgJSON.version
      });
    })
    .catch((err) => next(err));
}

module.exports = getRoot;
