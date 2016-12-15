'use strict';

module.exports = deleteLocation;

const locationService = require('../../services/locationService');

function deleteLocation(request, response, next) {
  const id = request.params.id;

  locationService.deleteLocation(id)
    .then(() => {
      response.setHeader('Content-Type', 'application/json');
      response.status(204).send();
    })
    .catch(next);
}
