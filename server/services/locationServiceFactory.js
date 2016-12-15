'use strict';

const uuid = require('node-uuid');
const errorTypes = require('../models/errorTypes');

function build() {
  const locations = [
    {
      id: 'c0b694ec-3352-43e3-9f22-77c87fe83d48',
      siteId: 'ind',
      name: 'Indianapolis International Airport',
      city: 'Indianapolis',
      stateCode: 'IN'
    },
    {
      id: 'dc95a8f9-713f-4aed-bf5e-4e5567c4dd9f',
      siteId: 'ord',
      name: 'Chicago O\'Hare Airport',
      city: 'Chicago',
      stateCode: 'IL'
    }
  ];

  function getLocations() {
    return new Promise(
      function (resolve, reject) { // eslint-disable-line no-unused-vars
        resolve(locations);
      });
  }

  function addLocation(location) {
    return new Promise(
      function (resolve, reject) { // eslint-disable-line no-unused-vars
        location.id = location.id || uuid.v4();
        locations.push(location);
        resolve(location);
      }
    );
  }

  function getLocation(locationId) {
    return new Promise(
      function (resolve, reject) {
        locations.forEach(function findLocation(locationElement) {
          if (locationElement.id === locationId) {
            resolve(locationElement);
          }
        });

        reject({ errorMessage: `No location was found with the unique identifier '${locationId}'.`, errorType: errorTypes.noLocationFound });
      }
    );
  }

  function updateLocation(location) {
    return new Promise(
      function (resolve, reject) {
        getLocation(location.id)
          .then(function updateInArray(result) {
            const indexToUpdate = locations.indexOf(result);
            locations[indexToUpdate] = location;
            resolve();
          })
          .catch(function (error) {
            reject(error);
          });
      }
    );
  }

  function deleteLocation(locationId) {
    return new Promise(
      function (resolve, reject) {
        getLocation(locationId)
          .then(function removeFromArray(result) {
            const indexToRemove = locations.indexOf(result);
            locations.splice(indexToRemove, 1);
            resolve();
          })
          .catch(function (error) {
            reject(error);
          });
      }
    );
  }

  return {
    getLocations: getLocations,
    addLocation: addLocation,
    getLocation: getLocation,
    updateLocation: updateLocation,
    deleteLocation: deleteLocation
  };
}

module.exports = {build};
