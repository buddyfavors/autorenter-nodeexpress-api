'use strict';

/**
 * Location Service Factory
 * @module services/locationServiceFactory
 */
const uuid = require('uuid/v4');
const errorTypes = require('../models/errorTypes');

/**
 * @function build
 * @return {array} - The factory methods
 */
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
      siteId: 'lax',
      name: 'Los Angeles International Airport',
      city: 'Los Angeles',
      stateCode: 'CA'
    }
  ];

  /**
   * @function getLocation
   * @return {Promise<{}>} - @resolve returns a location
   */
  function getLocations() {
    return new Promise(
      (resolve) => {
        resolve(locations);
      });
  }

  /**
  * @function addLocation
  * @param  {Object} location - An AutoRenter location
  * @return {Promise.<{}>} - @resolve returns a location
  */
  function addLocation(location) {
    return new Promise(
      (resolve) => {
        location.id = location.id || uuid();
        locations.push(location);
        resolve(location);
      }
    );
  }

  /**
  * @function getLocation
  * @param  {string} locationId - The id of the location to return
  * @return {Promise.<{}>}
      - @resolve returns a location<br/>
      - @reject returns an error message if no location was found with the provided id
  */
  function getLocation(locationId) {
    return new Promise(
      (resolve, reject) => {
        locations.forEach((locationElement) => {
          if (locationElement.id === locationId) {
            resolve(locationElement);
          }
        });

        const errorMessage =
          `No location was found with the unique identifier '${locationId}'.`;
        reject({
          id: locationId,
          message: errorMessage,
          errorType: errorTypes.notFound
        });
      }
    );
  }

  /**
  * @function updateLocation
  * @param  {Object} location - The location to update
  * @return {Promise.<{}>}
      - @resolve returns the updated location<br/>
      - @reject returns an error
  */
  function updateLocation(location) {
    return new Promise(
      (resolve, reject) => {
        getLocation(location.id)
          .then((result) => {
            const indexToUpdate = locations.indexOf(result);
            locations[indexToUpdate] = location;
            resolve();
          })
          .catch((error) => {
            reject(error);
          });
      }
    );
  }

  /**
  * @function deleteLocation
  * @param  {string} locationId - The id of the location to be deleted
  * @return {Promise.<{}>}
      - @reject returns an error
  */
  function deleteLocation(locationId) {
    return new Promise(
      (resolve, reject) => {
        getLocation(locationId)
          .then((result) => {
            const indexToRemove = locations.indexOf(result);
            locations.splice(indexToRemove, 1);
            resolve();
          })
          .catch((error) => {
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
