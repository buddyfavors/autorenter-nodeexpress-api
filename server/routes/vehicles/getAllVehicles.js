'use strict';

module.exports = getAllVehicles;

const vehicleService = require('../../services/vehicleService');
const locationService = require('../../services/locationService');

function getAllVehicles(request, response, next) {
  const locationId = request.params.locationId;

  locationService.getLocation(locationId)
    .then((location) => {
      return Promise.all([location, vehicleService.getVehicles(location.id)]);
    })
    .then(([location, vehicles]) => { // eslint-disable-line no-unused-vars
      response.setHeader('x-total-count', vehicles.length);
      response.status(200).json({'vehicles': vehicles});
    })
    .catch(next);
}
