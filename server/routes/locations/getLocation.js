'use strict';

module.exports = getLocation;

const Location = require('../models').Location;

function getLocation(request, response) {
  const id = request.params.id;

  const data = Location.getDocument(id);
  if (!data) {
    response.status(404);
  }

  response.setHeader('Content-Type', 'application/json');
  response.send(data);
}
