'use strict';

const uuid = require('node-uuid');
const errorTypes = require('../models/errorTypes');

function build() {
  const vehicles = [
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

  function getVehicles(locationId) {
    return new Promise(
      (resolve, reject) => { // eslint-disable-line no-unused-vars
        let vehiclesByLocation = [];
        vehicles.forEach((vehicleElement) => {
          if (vehicleElement.locationId === locationId) {
            vehiclesByLocation.push(vehicleElement);
          }
        });
        resolve(vehiclesByLocation);
      }
    );
  }

  function addVehicle(locationId, vehicle) {
    return new Promise(
      (resolve, reject) => { // eslint-disable-line no-unused-vars
        vehicle.id = vehicle.id || uuid.v4();
        vehicle.locationId = locationId;
        vehicles.push(vehicle);
        resolve(vehicle);
      }
    );
  }

  function getVehicle(vehicleId) {
    return new Promise(
      (resolve, reject) => {
        vehicles.forEach((vehicleElement) => {
          if (vehicleElement.id === vehicleId) {
            resolve(vehicleElement);
          }
        });

        reject({ id: vehicleId, errorMessage: `No vehicle was found with the unique identifier '${vehicleId}'.`, errorType: errorTypes.noVehicleFound });
      }
    );
  }

  function updateVehicle(vehicle) {
    return new Promise(
      (resolve, reject) => {
        getVehicle(vehicle.id)
          .then((result) => {
            const indexToUpdate = vehicles.indexOf(result);
            vehicles[indexToUpdate] = vehicle;
            resolve();
          })
          .catch((error) => {
            reject(error);
          });
      }
    );
  }

  function deleteVehicle(vehicleId) {
    return new Promise(
      (resolve, reject) => {
        getVehicle(vehicleId)
          .then((result) => {
            const indexToRemove = vehicles.indexOf(result);
            vehicles.splice(indexToRemove, 1);
            resolve();
          })
          .catch((error) => {
            reject(error);
          });
      }
    );
  }

  return {
    getVehicles: getVehicles,
    addVehicle: addVehicle,
    getVehicle: getVehicle,
    updateVehicle: updateVehicle,
    deleteVehicle: deleteVehicle
  };
}

module.exports = {build};
