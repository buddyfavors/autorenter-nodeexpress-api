'use strict';

const errorTypes = require('../models/errorTypes');

function build() {
  let self = this; // eslint-disable-line no-invalid-this
  self.states = [
    {
      stateCode: 'AL',
      name: 'Alabama'
    },
    {
      stateCode: 'AK',
      name: 'Alaska'
    },
    {
      stateCode: 'AZ',
      name: 'Arizona'
    },
    {
      stateCode: 'IL',
      name: 'Illinois'
    },
    {
      stateCode: 'IN',
      name: 'Indiana'
    },
    {
      stateCode: 'WV',
      name: 'West Virginia'
    }
  ];
  self.colors = [
    {
      id: '1',
      value: 'Black'
    },
    {
      id: '2',
      value: 'Blue'
    },
    {
      id: '3',
      value: 'Orange'
    },
    {
      id: '4',
      value: 'Red'
    },
    {
      id: '5',
      value: 'Silver'
    }
  ];

  function getData(lookupTypes) {
    return new Promise(
      (resolve, reject) => {
        if (lookupTypes.length === 0) {
          const errorMessage = 'Use query string vars to specify which types to fetch.';
          reject({
            errorMessage: errorMessage,
            errorType: errorTypes.badRequest
          });
        } else {
          let invalidTypes = [];
          let response = {};
          lookupTypes.forEach((lookupType) => {
            if (self[lookupType]) {
              response[lookupType] = self[lookupType];
            } else {
              invalidTypes.push(lookupType);
            }
          });
          if (invalidTypes.length === 0) {
            resolve(response);
          } else {
            const errorMessage = `The following lookup types do not exist: '${invalidTypes.toString()}'.`;
            reject({
              errorMessage: errorMessage,
              errorType: errorTypes.badRequest
            });
          }
        }
      });
  }

  return {
    getData: getData
  };
}

module.exports = {build};
