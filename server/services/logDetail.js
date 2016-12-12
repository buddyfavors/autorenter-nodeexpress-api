'use strict';

const logger = require('./logger');

function logDetail(username, level, message) {
  const logData = { username, level, message };

  if(!logData.message){
    logger.debug('Error adding log!');
    throw new Error('Log message was empty');
  }
  else{
    logger.debug(`(${logData.level}) ${logData.username} - ${logData.message}`);
  }
}

module.exports = logDetail;
