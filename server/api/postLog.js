'use strict';

const logDetail = require('../services/logDetail');

function postLog(request, response) {
  const dummyAuthTokenToRemoveWhenAuthIsImplemented = {
    username: 'jdoe'
  };
  return logDetail(dummyAuthTokenToRemoveWhenAuthIsImplemented.username,
      request.body.level, request.body.message)
    .then(() => response.status(201).json({ message: 'Log added successfully!' }))
    .catch(() => response.status(500).json({ message: 'Error adding log!' }));
}

module.exports = postLog;
