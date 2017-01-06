'use strict';

module.exports = postLocationVehicle;

const locationVehicleService = require('../../services/locationVehicleService');
const locationService = require('../../services/locationService');

function postLocationVehicle(request, response, next) {
  const data = request.body;
  const locationId = request.params.locationId;

  locationService.getLocation(locationId)
    .then((location) => {
      return Promise.all(
        [location, locationVehicleService.addLocationVehicle(location.id, data)]
      );
    })
    .then(([location, locationVehicle]) => { // eslint-disable-line no-unused-vars
      response.location(`${request.getUrl()}${locationVehicle.id}`);
      response.status(201).json();
    })
    .catch(next);
}
