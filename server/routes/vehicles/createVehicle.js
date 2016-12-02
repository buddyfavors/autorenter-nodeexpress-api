'use strict';

module.exports = createVehicle;

const Vehicle = require('../../models').Vehicle;

function createVehicle(request, response) {
  const data = request.body;
  data.locationId = request.params.locationId;
  const id = Location.generateId(data);

  data.id = id;
  Vehicle.saveDocument(id, data);

  response.setHeader('Content-Type', 'application/json');
  response.location(`/api/vehicles/${id}`);
  response.status(201).send();
}
