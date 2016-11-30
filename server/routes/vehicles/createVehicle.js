'use strict';

module.exports = createVehicle;

const Vehicle = require('../../models').Vehicle;

function createVehicle(request, response) {
  const data = request.body;
  data.locationId = request.params.locationId;

  Vehicle.saveDocument(null, data);

  response.setHeader('Content-Type', 'application/json');
  response.send(data);
}
