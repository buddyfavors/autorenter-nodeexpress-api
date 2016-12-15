'use strict';

module.exports = getAllLocations;

const locationService = require('../../services/locationService');
const vehicleService = require('../../services/vehicleService');

function getAllLocations(request, response, next) {
  locationService.getLocations()
    .then((locations) => {
      let getVehicleCount = locations.map((location, index) => {
        return vehicleService.getVehicles(location.id)
        .then((vehicles) => {
          locations[index].vehicleCount = vehicles.length;
        });
      });

      Promise.all(getVehicleCount)
        .then(() => {
          response.setHeader('Content-Type', 'application/json');
          response.setHeader('x-total-count', locations.length);
          response.status(200).send({'locations': locations});
        })
    .catch(next);
    });
}
