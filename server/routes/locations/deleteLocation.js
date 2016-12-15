'use strict';

module.exports = deleteLocation;

const locationService = require('../../services/locationService');
const logger = require('../../services/logger');
const errorTypes = require('../../models/errorTypes');

function deleteLocation(request, response) {
  const id = request.params.id;

  locationService.deleteLocation(id)
    .then(function() {
      response.setHeader('Content-Type', 'application/json');
      response.status(204).send();
    })
    .catch(function(error) {
      logger.info(`(${Symbol.keyFor(error.errorType)}) - ${error.errorMessage}`);

      response.setHeader('x-status-reason', error.errorMessage);
      if(errorTypes.notFound === error.errorType) {
        response.status(404).send();
      } else {
        response.status(500).send();
      }
    });
}
