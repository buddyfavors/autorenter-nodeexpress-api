'use strict';

module.exports = postLocation;

const locationService = require('../../services/locationService');
const logger = require('../../services/logger');
const errorTypes = require('../../models/errorTypes');

function postLocation(request, response) {
  let data = request.body;

  locationService.addLocation(data)
    .then(function(location) {
      response.setHeader('Content-Type', 'application/json');
      response.location(`${request.getUrl()}/${location.id}`);
      response.status(201).send();
    })
    .catch(function(error) {
      logger.info(`(${Symbol.keyFor(error.errorType)}) - ${error.errorMessage}`);

      response.setHeader('x-status-reason', error.errorMessage);
      response.status(500).send();
    });
}
