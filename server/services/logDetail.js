'use strict';

/**
 * Log Detail Service
 * @module services/logDetail
 */

const errorTypes = require('../models/errorTypes');
const logger = require('./logger');

/**
* @function logDetail
* @param  {string} username - The user creating the log entry
* @param  {string} level    - The level of the log entry
* @param  {string} message  - The message of the log entry
* @return {Promise.<{}>}
    - @resolve Writes the debug message 'Log added' to the logger.<br/>
    - @reject Returns an error message if the log message was empty.<br/>
    - @reject Returns an error message with details if the data could not be logged.
*/
function logDetail(username, level, message) {
  const logData = {username, level, message};
  /**
  * @constant
  * @type {Promise.<{}>}
  * @default
  */
  const log = new Promise((resolve, reject) => {
    if(!logData.message) {
      const err = new Error('Log message was empty');
      reject(err);
    } else {
      const debugMessage =
        `(${logData.level}) ${logData.username} - ${logData.message}`;
      logger.log(logData.level, debugMessage);
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
