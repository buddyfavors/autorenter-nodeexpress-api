'use strict';

module.exports = getAllVehicles;

const Vehicle = require('../models').Vehicle;

function getAllVehicles(request, response) {
  const data = Vehicle.getAllDocuments();

  response.setHeader('Content-Type', 'application/json');
  response.send(data);
}
