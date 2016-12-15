'use strict';

module.exports = getLocation;

const locationService = require('../../services/locationService');
const vehicleService = require('../../services/vehicleService');

function getLocation(request, response, next) {
  const id = request.params.id;

  locationService.getLocation(id)
    .then((location) => {
      let getVehicleCount = () => {
        return vehicleService.getVehicles(location.id)
          .then((vehicles) => {
            location.vehicleCount = vehicles.length;
          });
      };

      Promise.all([getVehicleCount])
        .then(() => {
          response.setHeader('Content-Type', 'application/json');
          response.status(200).send({'location': location});
        });
    })
    .catch(next);
}
