'use strict';

module.exports = getVehicle;

const Vehicle = require('../../models').Vehicle;

function getVehicle(request, response) {
  const id = request.params.id;

  const data = Vehicle.getDocument(id);
  if (!data) {
    response.status(404);
  }

  response.setHeader('Content-Type', 'application/json');
  response.send(data);
}
