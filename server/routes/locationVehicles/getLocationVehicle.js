'use strict';

module.exports = getLocationVehicle;

const locationVehicleService = require('../../services/locationVehicleService');

function getLocationVehicle(request, response, next) {
  const id = request.params.id;

  locationVehicleService.getLocationVehicle(id)
    .then((locationVehicle) => {
      response.status(200).json({'vehicle': locationVehicle});
    })
    .catch(next);
}
