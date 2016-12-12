'use strict';

const logger = require('./logger');

function logDetail(username, level, message) {
  const logData = { username, level, message };

  return new Promise(function(resolve, reject) {
    if(!logData.message){
      const err = new Error('Log message was empty');
      logger.error(`The following error prevented writing the log object: ${err.message}.`);
      logger.error(
        `Here is the data that could not be logged: ${JSON.stringify(logData)}.`);
      err.customType = 'fa.logError'; // eslint-disable-line no-param-reassign
      reject(err);
    }
    else{
      logger.debug(`(${logData.level}) ${logData.username} - ${logData.message}`);
      resolve();
    }
  });
}

module.exports.execute = logDetail;
