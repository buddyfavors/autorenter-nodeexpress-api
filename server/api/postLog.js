'use strict';

const models = require('../models');
const debug = require('debug')('sql');
const logError = require('../services/logError');

//Level : {error:  warn:  info }
function postLog(request, response) {
  return logError(request.body.username,request.body.level,request.body.message)
    .then(() => {
      return response.status(201).json({ message: 'Log Added sucessfully!' });
    })
    .catch(() => {
      return  response.status(500).json({ message: 'Error adding log!' });
    });
}

module.exports = postLog;
