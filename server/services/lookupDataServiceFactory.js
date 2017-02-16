'use strict';

/**
 * Lookup Data Service
 * @module services/lookupDataService
 */

const errorTypes = require('../models/errorTypes');

function build() {
  let lookupData = {};
  lookupData.states = [
    {
      stateCode: 'AZ',
      name: 'Arizona'
    },
    {
      stateCode: 'CA',
      name: 'California'
    },
    {
      stateCode: 'HI',
      name: 'Hawaii'
    },
    {
      stateCode: 'IN',
      name: 'Indiana'
    },
    {
      stateCode: 'WA',
      name: 'Washington'
    }
  ];
  lookupData.makes = [
    {
      id: 'tsl',
      name: 'Tesla'
    },
    {
      id: 'che',
      name: 'Chevrolet'
    },
    {
      id: 'frd',
      name: 'Ford'
    }
  ];
  lookupData.models = [
    {
      id: 'tms',
      name: 'Model S'
    },
    {
      id: 'tmx',
      name: 'Model X'
    },
    {
      id: 'cvt',
      name: 'Corvette'
    },
    {
      id: 'fxp',
      name: 'Explorer'
    },
    {
      id: 'fta',
      name: 'Taurus'
    },
  ];

  /**
  * @function getData
  * @param  {string} lookupTypes - This is a query string which specifies which types of data to fetch.
  * @return {Promise<{}>}
      - @resolve Returns lookupData object with the requested data.<br/>
      - @reject Returns an error message if no types were specified.<br/>
      - @reject Returns an error message if the provided type does not exist.
  */
  function getData(lookupTypes) {
    return new Promise(
      (resolve, reject) => {
        if (lookupTypes.length === 0) {
          const errorMessage = 'Use query string vars to specify which types to fetch.';
          reject({
            message: errorMessage,
            errorType: errorTypes.badRequest
          });
        } else {
          let invalidTypes = [];
          let response = {};
          lookupTypes.forEach((lookupType) => {
            if (lookupData[lookupType]) {
              response[lookupType] = lookupData[lookupType];
            } else {
              invalidTypes.push(lookupType);
            }
          });
          if (invalidTypes.length === 0) {
            resolve(response);
          } else {
            const errorMessage = `The following lookup types do not exist: '${invalidTypes.toString()}'.`;
            reject({
              message: errorMessage,
              errorType: errorTypes.badRequest
            });
          }
        }
      });
  }

  return {getData};
}

module.exports = {build};
