'use strict';

const lookupDataService = require('../../services/lookupDataService');

function getLookupData(request, response, next) {
  lookupDataService.getData(Object.keys(request.query))
    .then((lookupData) => {
      response.status(200).json({'lookupData': lookupData});
    })
    .catch(next);
}

module.exports = getLookupData;
