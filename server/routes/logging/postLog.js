'use strict';

const logDetail = require('../../services/logDetail');

function postLog(request, response, next) {
  const dummyAuthTokenToRemoveWhenAuthIsImplemented = {
    username: 'jdoe'
  };

  logDetail.execute(dummyAuthTokenToRemoveWhenAuthIsImplemented.username,
    request.body.level || 'info', request.body.message)
    .then(() => {
      response.status(201).json();
    })
    .catch(next);
}

module.exports = postLog;
