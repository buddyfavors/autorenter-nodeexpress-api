'use strict';

module.exports = createLocation;

const Location = require('../../models').Location;

function createLocation(request, response) {
  const data = request.body;

  Location.saveDocument(null, data);

  response.setHeader('Content-Type', 'application/json');
  response.send(data);
}
