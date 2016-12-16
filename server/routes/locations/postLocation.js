'use strict';

module.exports = postLocation;

const locationService = require('../../services/locationService');

function postLocation(request, response, next) {
  let data = request.body;

  locationService.addLocation(data)
    .then((location) => {
      response.location(`${request.getUrl()}${location.id}`);
      response.status(201).json();
    })
    .catch(next);
}
