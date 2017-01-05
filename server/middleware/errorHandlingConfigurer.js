'use strict';

const errorTypes = require('../models/errorTypes');
const logDetail = require('../services/logDetail');
const placeHolderUser = 'jdoe';

function logErrors(error, request, response, next) {
  if (response.headersSent) {
    next(error);
  } else {
    if (error.errorType === errorTypes.badRequest) {
      response
        .status(400)
        .json({message: error.message});
    } else if (error.errorType === errorTypes.notFound) {
      response
        .status(404)
        .json({message: error.message});
    } else if (error.errorType === errorTypes.loggingError) {
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
