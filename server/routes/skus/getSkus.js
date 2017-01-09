'use strict';

const skuDataService = require('../../services/skuDataService');

function getSkus(request, response, next) {
  skuDataService.getData(Object.keys(request.query))
    .then((skus) => {
      response.status(200).json({'skus': skus});
    })
    .catch(next);
}

module.exports = getSkus;
