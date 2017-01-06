'use strict';

module.exports = deleteLocationVehicle;

const locationVehicleService = require('../../services/locationVehicleService');

function deleteLocationVehicle(request, response, next) {
  const id = request.params.id;

  locationVehicleService.deleteLocationVehicle(id)
    .then(() => {
      response.status(204).json();
    })
    .catch(next);
}
