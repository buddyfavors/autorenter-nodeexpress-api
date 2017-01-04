'use strict';

const logDetail = require('../services/logDetail');
const placeHolderUser = 'jdoe';

function logErrors(error, request, response, next) {
  if (response.headersSent) {
    next(error);
  } else {
    if (error.errorType && error.errorType.toString() === 'Symbol(bad request)') {
      response
        .status(400)
        .json({message: error.errorMessage});
    } else if (error.customType === 'fa.logError') {
      response
        .status(500)
        .json({message: 'The system failed to write to the error log.'});
    } else {
      logDetail.execute(placeHolderUser, 'error', error.message)
        .catch(() => {
          /* It's already been handled in the logDetail method. */
        });
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
