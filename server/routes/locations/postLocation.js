'use strict';

module.exports = createLocation;

const Location = require('../../models').Location;

function createLocation(request, response) {
  let data = request.body;
  const id = Location.generateId(data);

  data.id = id;
  Location.saveDocument(id, data);

  response.setHeader('Content-Type', 'application/json');
  response.location(`${request.getUrl()}/${id}`);
  response.status(201).send();
}
