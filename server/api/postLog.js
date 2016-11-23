'use strict';

const logDetail = require('../services/logDetail');

function postLog(request, response, next) {
  const dummyAuthTokenToRemoveWhenAuthIsImplemented = {
    username: 'jdoe'
  };
  return logDetail.execute(dummyAuthTokenToRemoveWhenAuthIsImplemented.username,
      request.body.level, request.body.message)
    .then(() => response.status(201).json({ message: 'Log added successfully!' }))
    .catch((err) => next(err));
}

module.exports = postLog;
