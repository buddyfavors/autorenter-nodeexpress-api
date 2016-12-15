'use strict';

module.exports = putLocation;

const locationService = require('../../services/locationService');
const logger = require('../../services/logger');

function putLocation(request, response) {
  const data = request.body;
  const id = request.params.id;

  if (data.id === id) {
    locationService.updateLocation(data)
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
