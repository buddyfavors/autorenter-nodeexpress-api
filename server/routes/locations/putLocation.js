'use strict';

module.exports = putLocation;

const locationService = require('../../services/locationService');

function putLocation(request, response, next) {
  const data = request.body;
  const id = request.params.id;

  if (data.id === id) {
    locationService.updateLocation(data)
      .then(() => {
        response.location(`${request.getUrl()}${id}`);
        response.status(200).json();
      })
      .catch(next);
  } else {
    const responseReason = 'Request id does not match the resource id.';
    response.setHeader('x-status-reason', responseReason);
    response.status(400).json();
  }
}
