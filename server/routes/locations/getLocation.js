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
          response.status(200).json({'location': location});
        });
    })
    .catch(next);
}
