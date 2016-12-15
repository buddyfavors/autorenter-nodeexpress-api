'use strict';

module.exports = getVehicle;

const vehicleService = require('../../services/vehicleService');
const logger = require('../../services/logger');
const errorTypes = require('../../models/errorTypes');

function getVehicle(request, response) {
  const id = request.params.id;

  vehicleService.getVehicle(id)
    .then(function(vehicle) {
      response.setHeader('Content-Type', 'application/json');
      response.status(200).send({'vehicle': vehicle});
    })
    .catch(function(error) {
      logger.info(`(${Symbol.keyFor(error.errorType)}) - ${error.errorMessage}`);

      response.setHeader('x-status-reason', error.errorMessage);
      if(errorTypes.noVehicleFound === error.errorType) {
        response.status(404).send();
      } else {
        response.status(500).send();
      }
    });
}
