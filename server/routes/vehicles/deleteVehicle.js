'use strict';

module.exports = deleteVehicle;

const vehicleService = require('../../services/vehicleService');

function deleteVehicle(request, response, next) {
  const id = request.params.id;

  vehicleService.deleteVehicle(id)
    .then(() => {
      response.status(204).json();
    })
    .catch(next);
}
