'use strict';

module.exports = getAllLocationVehicles;

const locationVehicleService = require('../../services/locationVehicleService');
const locationService = require('../../services/locationService');

function getAllLocationVehicles(request, response, next) {
  const locationId = request.params.locationId;

  locationService.getLocation(locationId)
    .then((location) => {
      return Promise.all([location, locationVehicleService.getLocationVehicles(location.id)]);
    })
    .then(([location, locationVehicles]) => { // eslint-disable-line no-unused-vars
      response.setHeader('x-total-count', locationVehicles.length);
      response.status(200).json({'vehicles': locationVehicles});
    })
    .catch(next);
}
