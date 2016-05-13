'use strict';

const HttpError = require('./HttpError');

class HttpForbidden extends HttpError {
  constructor() {
    super(404, 'Forbidden');
    this.name = 'HttpForbidden';
  }
}

module.exports = HttpForbidden;
