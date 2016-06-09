'use strict';

const logData = require('../services/log');

function postLog(request, response) {
  return logData(request.body.username, request.body.level, request.body.message)
    .then(() => response.status(201).json({ message: 'Log added successfully!' }))
    .catch(() => response.status(500).json({ message: 'Error adding log!' }));
}

module.exports = postLog;
