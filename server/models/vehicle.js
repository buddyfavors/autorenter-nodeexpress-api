'use strict';

module.exports = createVehicleModel();

const JsonFiles = require('./JsonFiles');

function createVehicleModel() {
  return new JsonFiles('vehicles');
}
