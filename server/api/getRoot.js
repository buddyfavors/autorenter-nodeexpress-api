'use strict';

const express = require('express');
const models = require('../models');
const pkgJSON = require('../../package.json');

function getRoot(request, response) {

  models.User.findOne({ where: {username: 'newton'} }).then(function(user) {
    let app = express();
    let env = app.get('env');

    response.status(200).json({
      user: user.username,
      title: pkgJSON.description,
      environment: env,
      version: pkgJSON.version
    });
  })
}

module.exports = getRoot;
