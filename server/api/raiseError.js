'use strict';

function raiseError(request, response, next) {
  const err = new Error('An API-originated error for testing purposes.');
  next(err);
}

module.exports = raiseError;
