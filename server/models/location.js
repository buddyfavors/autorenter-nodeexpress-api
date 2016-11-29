'use strict';

module.exports = createLocationModel();

const JsonFiles = require('./JsonFiles');

function createLocationModel() {
  return new JsonFiles('locations');
}
