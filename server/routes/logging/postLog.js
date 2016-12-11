'use strict';

const logDetail = require('../../services/logDetail');

function postLog(request, response) {
  const dummyAuthTokenToRemoveWhenAuthIsImplemented = {
    username: 'jdoe'
  };

  try {
    logDetail(dummyAuthTokenToRemoveWhenAuthIsImplemented.username,
      request.body.level, request.body.message);
    response.status(201).json();
  }
  catch(error) {
    response.status(500).json({ message: 'Error adding log!' });
  }
}

module.exports = postLog;
