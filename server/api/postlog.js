'use strict';

function postLog(request, response) {
  console.log(request.body.level, request.body.message) /*eslint no-console: 0 */
    .then(() => response.status(201).json({ message: 'Log added successfully!' }))
    .catch(() => response.status(500).json({ message: 'Error adding log!' }));
}

module.exports = postLog;