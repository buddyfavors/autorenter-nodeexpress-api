'use strict';

module.exports = getAllLocations;

const locationService = require('../../services/locationService');
const vehicleService = require('../../services/vehicleService');

function getAllLocations(request, response) {
  locationService.getLocations().then(function(locations) {
    let getVehicleCount = locations.map(function(location, index) {
      return vehicleService.getVehicles(location.id)
        .then(function(vehicles) {
          locations[index].vehicleCount = vehicles.length;
        });
    });

    Promise.all(getVehicleCount).then(function () {
      response.setHeader('Content-Type', 'application/json');
      response.setHeader('x-total-count', locations.length);
      response.status(200).send({'locations': locations});
    });
  });
}
