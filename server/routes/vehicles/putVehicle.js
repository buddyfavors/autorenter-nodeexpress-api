'use strict';

module.exports = putVehicle;

const vehicleService = require('../../services/vehicleService');
const logger = require('../../services/logger');

function putVehicle(request, response) {
  const data = request.body;
  const id = request.params.id;

  if (data.id === id) {
    vehicleService.updateVehicle(data)
      .then(function() {
        response.setHeader('Content-Type', 'application/json');
        response.location(`${request.getUrl()}${id}`);
        response.status(200).send();
      })
      .catch(function(error) {
        logger.info(`(${Symbol.keyFor(error.errorType)}) - ${error.errorMessage}`);

        response.setHeader('x-status-reason', error.errorMessage);
        response.status(500).send();
      });
  } else {
    response.setHeader('x-status-reason', 'Request id does not match the resource id.');
    response.status(400).send();
  }
}
