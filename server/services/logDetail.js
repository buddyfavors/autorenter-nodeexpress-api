'use strict';

const errorTypes = require('../models/errorTypes');
const logger = require('./logger');

function logDetail(username, level, message) {
  const logData = {username, level, message};
  const log = new Promise((resolve, reject) => {
    if(!logData.message) {
      const err = new Error('Log message was empty');
      reject(err);
    } else {
      const debugMessage =
        `(${logData.level}) ${logData.username} - ${logData.message}`;
      logger.debug(debugMessage);
      resolve();
    }
  });

  return log.then(() => {
    logger.debug('Log added');
  })
  .catch((err) => {
    const writeErrorMessage =
      `The following error prevented writing the log object: ${err}.`;
    const dataErrorMessage =
      `Here is the data that could not be logged: ${JSON.stringify(logData)}.`;
    /* eslint-disable no-console */
    console.error(writeErrorMessage);
    console.error(dataErrorMessage);
    /* eslint-enable no-console */
    err.errorType = errorTypes.loggingError; // eslint-disable-line no-param-reassign
    throw err;
  });
}

module.exports.execute = logDetail;
