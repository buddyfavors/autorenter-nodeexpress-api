'use strict';

module.exports = saveVehicle;

const Vehicle = require('../models').Vehicle;

function saveVehicle(request, response) {
  const data = request.body;
  const id = request.params.id;

  if (data.id === id) {
    Vehicle.saveDocument(id, data);
  } else {
    response.status(400);
  }

  response.setHeader('Content-Type', 'application/json');
  response.send(data);
}
