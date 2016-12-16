'use strict';

module.exports = deleteLocation;

const locationService = require('../../services/locationService');

function deleteLocation(request, response, next) {
  const id = request.params.id;

  locationService.deleteLocation(id)
    .then(() => {
      response.status(204).json();
    })
    .catch(next);
}
