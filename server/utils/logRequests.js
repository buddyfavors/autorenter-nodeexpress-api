'use strict';

const assert = require('assert');
const config = require('../config');
const debug = require('debug')('api');
const removeProperty = require('./removeProperty');
const _ = require('lodash');

const blacklist = config.server.blacklist;

// Log the request body. Do not log any body properties that appear in the blacklist.
function logRequestBody(request) {
  let body = _.cloneDeep(request.body);
  assert.ok(blacklist && blacklist.length > 0, 'Expected to have a request body blacklist, but none was found.');
  removeProperty(body, blacklist);
  if (body && Object.keys(body).length) {
    debug(`  >> Request Body: ${JSON.stringify(body)}`);
  }
}

function logRequests() {
  return function (request, response, next) {
    debug(`${request.method.toUpperCase()} ${request.path}`);
    logRequestBody(request);
    next();
  };
}

module.exports = logRequests;
