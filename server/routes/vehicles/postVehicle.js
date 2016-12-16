'use strict';

module.exports = postVehicle;

const vehicleService = require('../../services/vehicleService');
const locationService = require('../../services/locationService');

function postVehicle(request, response, next) {
  const data = request.body;
  const locationId = request.params.locationId;

  locationService.getLocation(locationId)
    .then((location) => {
      return Promise.all([location, vehicleService.addVehicle(location.id, data)]);
    })
    .then(([location, vehicle]) => { // eslint-disable-line no-unused-vars
      response.location(`${request.getUrl()}${vehicle.id}`);
      response.status(201).json();
    })
    .catch(next);
}
