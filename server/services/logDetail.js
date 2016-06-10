'use strict';

const models = require('../models');
const debug = require('debug')('api');

function logDetail(username, level, message) {
  const logData = { username, level, message };
  return models.Log.create(logData).then(() => {
    debug('Log added');
  })
    .error((err) => {
      debug(`Error occured while adding logs: ${err}`);
      throw err;
    });
}

module.exports = logDetail;
