'use strict';

module.exports = getLocation;

const locationService = require('../../services/locationService');
const logger = require('../../services/logger');
const errorTypes = require('../../models/errorTypes');

function getLocation(request, response) {
  const id = request.params.id;

  locationService.getLocation(id)
    .then(function(location) {
      response.setHeader('Content-Type', 'application/json');
      response.status(200).send({'location': location});
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
