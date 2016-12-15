'use strict';

module.exports = getAllLocations;

const locationService = require('../../services/locationService');

function getAllLocations(request, response) {
  locationService.getLocations().then(function(locations) {
    response.setHeader('Content-Type', 'application/json');
    response.status(200).send({'locations': locations});
  });
}
