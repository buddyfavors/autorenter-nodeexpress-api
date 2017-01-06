'use strict';

module.exports = getLocation;

const locationService = require('../../services/locationService');
const locationVehicleService = require('../../services/locationVehicleService');

function getLocation(request, response, next) {
  const id = request.params.id;

  locationService.getLocation(id)
    .then((location) => {
      let getVehicleCount = () => {
        return locationVehicleService.getLocationVehicles(location.id)
          .then((locationVehicles) => {
            location.vehicleCount = locationVehicles.length;
          });
      };

      Promise.all([getVehicleCount])
        .then(() => {
          response.status(200).json({'location': location});
        });
    })
    .catch(next);
}
