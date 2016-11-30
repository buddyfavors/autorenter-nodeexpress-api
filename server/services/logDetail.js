'use strict';

const models = require('../models');
const debug = require('debug')('api');

function logDetail(username, level, message) {
  const logData = { username, level, message };
  return models.Log.create(logData).then(() => {
    debug('Log added');
  })
  .catch((err) => {
    /* eslint-disable no-console */
    console.error(`The following error prevented writing the log object to the database: ${err}.`);
    console.error(
      `Here is the data that could not be logged to the database ${JSON.stringify(logData)}.`);
    err.customType = 'fa.logError'; // eslint-disable-line no-param-reassign
    throw err;
  });
}

module.exports.execute = logDetail;
