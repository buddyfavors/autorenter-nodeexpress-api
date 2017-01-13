'use strict';

const logDetail = require('../../services/logDetail');
const config = require('../../config');

function postLog(request, response, next) {
  const dummyAuthTokenToRemoveWhenAuthIsImplemented = {
    username: 'jdoe'
  };

  logDetail.execute(dummyAuthTokenToRemoveWhenAuthIsImplemented.username,
    request.body.level || config.server.loggerLevel, request.body.message)
    .then(() => {
      response.status(201).json();
    })
    .catch(next);
}

module.exports = postLog;
