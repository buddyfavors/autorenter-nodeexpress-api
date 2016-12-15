'use strict';

module.exports = postVehicle;

const vehicleService = require('../../services/vehicleService');
const locationService = require('../../services/locationService');
const logger = require('../../services/logger');
const errorTypes = require('../../models/errorTypes');

function postVehicle(request, response) {
  const data = request.body;
  const locationId = request.params.locationId;

  locationService.getLocation(locationId)
    .then((location) => {
      return Promise.all([location, vehicleService.addVehicle(location.id, data)]);
    })
    .then(([location, vehicle]) => { // eslint-disable-line no-unused-vars
      response.setHeader('Content-Type', 'application/json');
      response.location(`${request.getUrl()}${vehicle.id}`);
      response.status(201).send();
    })
    .catch((error) => {
      logger.info(`(${Symbol.keyFor(error.errorType)}) - ${error.errorMessage}`);

      response.setHeader('x-status-reason', error.errorMessage);
      if(errorTypes.noLocationFound === error.errorType) {
        response.status(404).send();
      } else {
        response.status(500).send();
      }
    });
}
