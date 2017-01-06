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
      makeId: 'tsl',
      name: 'Model S'
    },
    {
      id: 'tmx',
      makeId: 'tsl',
      name: 'Model X'
    },
    {
      id: 'cvt',
      makeId: 'che',
      name: 'Corvette'
    },
    {
      id: 'fxp',
      makeId: 'frd',
      name: 'Explorer'
    },
    {
      id: 'fta',
      makeId: 'frd',
      name: 'Taurus'
    },
  ];
  lookupData.colors = [
    {
      id: 'blk',
      value: 'Black'
    },
    {
      id: 'red',
      value: 'Red'
    },
    {
      id: 'slv',
      value: 'Silver'
    }
  ];
  lookupData.vehicle_rules = [
    {makeId: 'tsl', modelId: 'tms', year: 2016, colorId: 'blk'},
    {makeId: 'tsl', modelId: 'tmx', year: 2016, colorId: 'blk'},
    {makeId: 'tsl', modelId: 'tms', year: 2017, colorId: 'blk'},
    {makeId: 'tsl', modelId: 'tms', year: 2017, colorId: 'slv'},
    {makeId: 'tsl', modelId: 'tmx', year: 2017, colorId: 'blk'},
    {makeId: 'tsl', modelId: 'tmx', year: 2017, colorId: 'slv'},
    {makeId: 'che', modelId: 'cvt', year: 2016, colorId: 'blk'},
    {makeId: 'che', modelId: 'cvt', year: 2016, colorId: 'red'},
    {makeId: 'che', modelId: 'cvt', year: 2017, colorId: 'blk'},
    {makeId: 'che', modelId: 'cvt', year: 2017, colorId: 'red'},
    {makeId: 'frd', modelId: 'fxp', year: 2016, colorId: 'blk'},
    {makeId: 'frd', modelId: 'fta', year: 2016, colorId: 'blk'},
    {makeId: 'frd', modelId: 'fta', year: 2016, colorId: 'red'},
    {makeId: 'frd', modelId: 'fta', year: 2016, colorId: 'slv'},
    {makeId: 'frd', modelId: 'fxp', year: 2017, colorId: 'blk'},
    {makeId: 'frd', modelId: 'fxp', year: 2017, colorId: 'slv'},
    {makeId: 'frd', modelId: 'fta', year: 2017, colorId: 'blk'},
    {makeId: 'frd', modelId: 'fta', year: 2017, colorId: 'red'},
    {makeId: 'frd', modelId: 'fta', year: 2017, colorId: 'slv'}
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
