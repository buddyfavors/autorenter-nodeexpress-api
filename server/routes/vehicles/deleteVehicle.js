'use strict';

module.exports = deleteVehicle;

const vehicleService = require('../../services/vehicleService');
const logger = require('../../services/logger');
const errorTypes = require('../../models/errorTypes');

function deleteVehicle(request, response) {
  const id = request.params.id;

  vehicleService.deleteVehicle(id)
    .then(function() {
      response.setHeader('Content-Type', 'application/json');
      response.status(204).send();
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
