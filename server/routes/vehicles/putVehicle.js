'use strict';

module.exports = putVehicle;

const vehicleService = require('../../services/vehicleService');

function putVehicle(request, response, next) {
  const data = request.body;
  const id = request.params.id;

  if (data.id === id) {
    vehicleService.updateVehicle(data)
      .then(() => {
        response.location(`${request.getUrl()}${id}`);
        response.status(200).json();
      })
      .catch(next);
  } else {
    response.setHeader('x-status-reason', 'Request id does not match the resource id.');
    response.status(400).json();
  }
}
