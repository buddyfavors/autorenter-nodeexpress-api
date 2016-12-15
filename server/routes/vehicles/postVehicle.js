'use strict';

module.exports = postVehicle;

const vehicleService = require('../../services/vehicleService');
const logger = require('../../services/logger');

function postVehicle(request, response) {
  const data = request.body;
  const locationId = request.params.locationId;

  // TODO: validate location id links to valid location (Separate PR)

  vehicleService.addVehicle(locationId, data)
    .then(function(vehicle) {
      response.setHeader('Content-Type', 'application/json');
      response.location(`${request.getUrl()}${vehicle.id}`);
      response.status(201).send();
    })
    .catch(function(error) {
      logger.info(`(${Symbol.keyFor(error.errorType)}) - ${error.errorMessage}`);

      response.setHeader('x-status-reason', error.errorMessage);
      response.status(500).send();
    });
}
