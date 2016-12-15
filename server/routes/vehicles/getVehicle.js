'use strict';

module.exports = getVehicle;

const vehicleService = require('../../services/vehicleService');

function getVehicle(request, response, next) {
  const id = request.params.id;

  vehicleService.getVehicle(id)
    .then((vehicle) => {
      response.setHeader('Content-Type', 'application/json');
      response.status(200).send({'vehicle': vehicle});
    })
    .catch(next);
}
