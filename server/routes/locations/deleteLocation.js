'use strict';

module.exports = removeLocation;

const Location = require('../../models').Location;

function removeLocation(request, response) {
  const id = request.params.id;

  const data = Location.removeDocument(id);
  if (!data) {
    response.status(404);
  }

  response.setHeader('Content-Type', 'application/json');
  response.status(204).send();
}
