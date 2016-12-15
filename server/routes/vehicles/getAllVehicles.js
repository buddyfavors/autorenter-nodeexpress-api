'use strict';

module.exports = getAllVehicles;

const vehicleService = require('../../services/vehicleService');
const logger = require('../../services/logger');

function getAllVehicles(request, response) {
  const locationId = request.params.locationId;

  // TODO: validate location id links to valid location (Separate PR)

  vehicleService.getVehicles(locationId)
    .then(function(vehicles) {
      logger.info(vehicles);
      response.setHeader('Content-Type', 'application/json');
      response.setHeader('x-total-count', vehicles.length);
      response.status(200).send({'vehicles': vehicles});
    });
}
