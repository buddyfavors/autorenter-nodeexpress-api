'use strict';

module.exports = createAppRouter();

const express = require('express');

function createAppRouter() {
  const router = express.Router();

  router.use(require('./locations'));
  router.use(require('./vehicles'));

  return router;
}
