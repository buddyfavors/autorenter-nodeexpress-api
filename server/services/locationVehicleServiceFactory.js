'use strict';

const uuid = require('uuid/v4');
const errorTypes = require('../models/errorTypes');

function build() {
  const locationVehicles = [
    {
      id: '0b68a1d6-4210-42e0-9647-3747da20a181',
      locationId: 'c0b694ec-3352-43e3-9f22-77c87fe83d48',
      vin: '1XKDPB0X04R047346',
      make: 'Toyota',
      model: 'Tercel',
      year: 1990,
      miles: 452303,
      color: 'Gold',
      isRentToOwn: false,
    },
    {
      id: '474086d6-eb1b-4861-9876-de892db743c9',
      locationId: 'c0b694ec-3352-43e3-9f22-77c87fe83d48',
      vin: '1HVLPHXM4GHA52708',
      make: 'Honda',
      model: 'Civic',
      year: 1994,
      miles: 282563,
      color: 'Silver',
      isRentToOwn: true,
    },
    {
      id: '85a8eea6-1c03-4455-9125-36527a00a96b',
      locationId: 'dc95a8f9-713f-4aed-bf5e-4e5567c4dd9f',
      vin: '2XKDPB0X04R047346',
      make: 'Chevrolet',
      model: 'Impala',
      year: 1996,
      miles: 452303,
      color: 'Black',
      isRentToOwn: true,
    },
    {
      id: '4d9f9e42-6d36-450e-9068-18ed163d9829',
      locationId: 'dc95a8f9-713f-4aed-bf5e-4e5567c4dd9f',
      vin: '2HVLPHXM4GHA52708',
      make: 'Ford',
      model: 'Pinto',
      year: 1973,
      miles: 282563,
      color: 'Orange',
      isRentToOwn: false,
    }
  ];

  function getLocationVehicles(locationId) {
    return new Promise(
      (resolve, reject) => { // eslint-disable-line no-unused-vars
        let vehiclesByLocation = [];
        locationVehicles.forEach((locationVehicleElement) => {
          if (locationVehicleElement.locationId === locationId) {
            vehiclesByLocation.push(locationVehicleElement);
          }
        });
        resolve(vehiclesByLocation);
      }
    );
  }

  function addLocationVehicle(locationId, locationVehicle) {
    return new Promise(
      (resolve, reject) => { // eslint-disable-line no-unused-vars
        locationVehicle.id = locationVehicle.id || uuid();
        locationVehicle.locationId = locationId;
        locationVehicles.push(locationVehicle);
        resolve(locationVehicle);
      }
    );
  }

  function getLocationVehicle(locationVehicleId) {
    return new Promise(
      (resolve, reject) => {
        locationVehicles.forEach((locationVehicleElement) => {
          if (locationVehicleElement.id === locationVehicleId) {
            resolve(locationVehicleElement);
          }
        });

        const errorMessage =
          `No vehicle was found with the unique identifier '${locationVehicleId}'.`;
        reject({
          id: locationVehicleId,
          message: errorMessage,
          errorType: errorTypes.notFound
        });
      }
    );
  }

  function updateLocationVehicle(locationVehicle) {
    return new Promise(
      (resolve, reject) => {
        getLocationVehicle(locationVehicle.id)
          .then((result) => {
            const indexToUpdate = locationVehicles.indexOf(result);
            locationVehicles[indexToUpdate] = locationVehicle;
            resolve();
          })
          .catch((error) => {
            reject(error);
          });
      }
    );
  }

  function deleteLocationVehicle(locationVehicleId) {
    return new Promise(
      (resolve, reject) => {
        getLocationVehicle(locationVehicleId)
          .then((result) => {
            const indexToRemove = locationVehicles.indexOf(result);
            locationVehicles.splice(indexToRemove, 1);
            resolve();
          })
          .catch((error) => {
            reject(error);
          });
      }
    );
  }

  return {
    getLocationVehicles: getLocationVehicles,
    addLocationVehicle: addLocationVehicle,
    getLocationVehicle: getLocationVehicle,
    updateLocationVehicle: updateLocationVehicle,
    deleteLocationVehicle: deleteLocationVehicle
  };
}

module.exports = {build};
