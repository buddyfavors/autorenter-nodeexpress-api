'use strict';

module.exports = removeVehicle;

const Vehicle = require('../../models').Vehicle;

function removeVehicle(request, response) {
  const id = request.params.id;

  const data = Vehicle.removeDocument(id);
  if (!data) {
    response.status(404);
  }

  response.setHeader('Content-Type', 'application/json');
  response.status(204).send();
}
