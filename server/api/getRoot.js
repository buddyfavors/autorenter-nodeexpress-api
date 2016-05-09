'use strict';

const express = require('express');
const pkgJSON = require('../../package.json');

/**
 * getRoot
 *
 *    Returns the expected result for queries sent to /.
 */
function getRoot(request, response) {
  let app = express();
  let env = app.get('env');

  response.status(200).json({title: pkgJSON.description, environment: env, version: pkgJSON.version});
}
module.exports = getRoot;
