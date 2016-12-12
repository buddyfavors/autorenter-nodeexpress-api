'use strict';

module.exports = getRaiseError;

function getRaiseError(request, response, next) {
  const err = new Error('An API-originated error for testing purposes.');
  next(err);
}
