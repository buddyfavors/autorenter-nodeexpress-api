'use strict';

module.exports = getAllVehicles;

const vehicleService = require('../../services/vehicleService');
const locationService = require('../../services/locationService');
const logger = require('../../services/logger');
const errorTypes = require('../../models/errorTypes');

function getAllVehicles(request, response) {
  const locationId = request.params.locationId;

  locationService.getLocation(locationId)
    .then(function(location) {
      return Promise.all([location, vehicleService.getVehicles(location.id)]);
    })
    .then(function(results) {
      let vehicles = results[1];
      response.setHeader('Content-Type', 'application/json');
      response.setHeader('x-total-count', vehicles.length);
      response.status(200).send({'vehicles': vehicles});
    })
    .catch(function(error) {
      logger.info(`(${Symbol.keyFor(error.errorType)}) - ${error.errorMessage}`);

      response.setHeader('x-status-reason', error.errorMessage);
      if(errorTypes.noLocationFound === error.errorType) {
        response.status(404).send();
      } else {
        response.status(500).send();
      }
    });
}
