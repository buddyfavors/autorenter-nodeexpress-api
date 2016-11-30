'use strict';

const logDetail = require('../services/logDetail');
const dummyUsernameToRemoveWhenAuthIsImplemented = 'jdoe';

function logErrors(error, request, response, next) {
  if (response.headersSent) {
    next(error);
  } else {
    if (error.customType === 'fa.logError') {
      response.status(500);
      response.json({ message: 'The system failed to write to the error log.' });
    } else {
      logDetail.execute(dummyUsernameToRemoveWhenAuthIsImplemented, 'error', error.message)
        .catch(() => { /* It's already been handled in the logDetail method. */ });
      next(error);
    }
  }
}

function configureErrorHandling(app) {
  app.use(logErrors);
}

module.exports = {
  configureErrorHandling,
  logErrors
};
