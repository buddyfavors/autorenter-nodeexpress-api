'use strict';

module.exports = saveLocation;

const Location = require('../../models').Location;

function saveLocation(request, response) {
  const data = request.body;
  const id = request.params.id;

  if (data.id === id) {
    Location.saveDocument(id, data);
  } else {
    response.status(400);
  }

  response.setHeader('Content-Type', 'application/json');
  response.send(data);
}
