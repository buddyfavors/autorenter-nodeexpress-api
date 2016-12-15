'use strict';

module.exports = postLocation;

const locationService = require('../../services/locationService');

function postLocation(request, response, next) {
  let data = request.body;

  locationService.addLocation(data)
    .then((location) => {
      response.setHeader('Content-Type', 'application/json');
      response.location(`${request.getUrl()}${location.id}`);
      response.status(201).send();
    })
    .catch(next);
}
