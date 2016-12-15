'use strict';

module.exports = getAllVehicles;

const vehicleService = require('../../services/vehicleService');
const locationService = require('../../services/locationService');
const logger = require('../../services/logger');
const errorTypes = require('../../models/errorTypes');

function getAllVehicles(request, response) {
  const locationId = request.params.locationId;

  locationService.getLocation(locationId)
    .then((location) => {
      return Promise.all([location, vehicleService.getVehicles(location.id)]);
    })
    .then(([location, vehicles]) => { // eslint-disable-line no-unused-vars
      response.setHeader('Content-Type', 'application/json');
      response.setHeader('x-total-count', vehicles.length);
      response.status(200).send({'vehicles': vehicles});
    })
    .catch((error) => {
      logger.info(`(${Symbol.keyFor(error.errorType)}) - ${error.errorMessage}`);

      response.setHeader('x-status-reason', error.errorMessage);
      if(errorTypes.notFound === error.errorType) {
        response.status(404).send();
      } else {
        response.status(500).send();
      }
    });
}
