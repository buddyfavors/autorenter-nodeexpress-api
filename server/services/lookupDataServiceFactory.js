'use strict';

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
  lookupData.colors = ['Black', 'Red', 'Silver'];
  lookupData.vehicle_skus = [
    {makeId: 'tsl', modelId: 'tms', year: 2016, color: 'Black'},
    {makeId: 'tsl', modelId: 'tmx', year: 2016, color: 'Black'},
    {makeId: 'tsl', modelId: 'tms', year: 2017, color: 'Black'},
    {makeId: 'tsl', modelId: 'tms', year: 2017, color: 'Silver'},
    {makeId: 'tsl', modelId: 'tmx', year: 2017, color: 'Black'},
    {makeId: 'tsl', modelId: 'tmx', year: 2017, color: 'Silver'},
    {makeId: 'che', modelId: 'cvt', year: 2016, color: 'Black'},
    {makeId: 'che', modelId: 'cvt', year: 2016, color: 'Red'},
    {makeId: 'che', modelId: 'cvt', year: 2017, color: 'Black'},
    {makeId: 'che', modelId: 'cvt', year: 2017, color: 'Red'},
    {makeId: 'frd', modelId: 'fxp', year: 2016, color: 'Black'},
    {makeId: 'frd', modelId: 'fta', year: 2016, color: 'Black'},
    {makeId: 'frd', modelId: 'fta', year: 2016, color: 'Red'},
    {makeId: 'frd', modelId: 'fta', year: 2016, color: 'Silver'},
    {makeId: 'frd', modelId: 'fxp', year: 2017, color: 'Black'},
    {makeId: 'frd', modelId: 'fxp', year: 2017, color: 'Silver'},
    {makeId: 'frd', modelId: 'fta', year: 2017, color: 'Black'},
    {makeId: 'frd', modelId: 'fta', year: 2017, color: 'Red'},
    {makeId: 'frd', modelId: 'fta', year: 2017, color: 'Silver'}
  ];

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
