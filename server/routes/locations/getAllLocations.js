'use strict';

module.exports = getAllLocations;

const Location = require('../../models').Location;

function getAllLocations(request, response) {
  const data = Location.getAllDocuments();

  response.setHeader('Content-Type', 'application/json');
  response.send(data);
}
