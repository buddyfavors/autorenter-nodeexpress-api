'use strict';

module.exports = getAllLocations;

const locationService = require('../../services/locationService');
const locationVehicleService = require('../../services/locationVehicleService');

function getAllLocations(request, response, next) {
  locationService.getLocations()
    .then((locations) => {
      let getVehicleCount = locations.map((location, index) => {
        return locationVehicleService.getLocationVehicles(location.id)
        .then((locationVehicles) => {
          locations[index].vehicleCount = locationVehicles.length;
        });
      });

      Promise.all(getVehicleCount)
        .then(() => {
          response.setHeader('x-total-count', locations.length);
          response.status(200).json({'locations': locations});
        })
    .catch(next);
    });
}
