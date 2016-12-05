'use strict';

module.exports = createVehicle;

const Vehicle = require('../../models').Vehicle;

function createVehicle(request, response) {
  const data = request.body;
  data.locationId = request.params.locationId;
  const id = Vehicle.generateId(data);

  data.id = id;
  Vehicle.saveDocument(id, data);

  response.setHeader('Content-Type', 'application/json');
  response.location(`${request.getUrl()}/${id}`);
  response.status(201).send();
}
