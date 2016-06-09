'use strict';

const models = require('../models');
const debug = require('debug')('api');

function logDetail(username, level, message) {
  const objLogging = { username, level, message };
  return models.Log.create(objLogging).then(() => {
    debug('Log added');
  })
    .error((err) => {
      debug(`Error occured while adding logs: ${err}`);
      throw err;
    });
}

module.exports = logDetail;
