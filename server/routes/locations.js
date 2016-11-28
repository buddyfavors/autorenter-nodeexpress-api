'use strict';

const express = require('express');
const router = module.exports = express.Router();  // eslint-disable-line new-cap

const Location = require('../models').Location;

router.get('/locations', getAllLocations);
router.get('/locations/:id', getLocation);
router.post('/locations', createLocation);
router.put('/locations/:id', saveLocation);
router.delete('/locations/:id', removeLocation);


function createLocation(request, response) {
  const data = request.body;

  Location.saveDocument(null, data);

  response.setHeader('Content-Type', 'application/json');
  response.send(data);
}

function getAllLocations(request, response) {
  const data = Location.getAllDocuments();

  response.setHeader('Content-Type', 'application/json');
  response.send(data);
}

function getLocation(request, response) {
  const id = request.params.id;

  const data = Location.getDocument(id);
  if (!data) {
    response.status(404);
  }

  response.setHeader('Content-Type', 'application/json');
  response.send(data);
}

function removeLocation(request, response) {
  const id = request.params.id;

  const data = Location.removeDocument(id);
  if (!data) {
    response.status(404);
  }

  response.setHeader('Content-Type', 'application/json');
  response.send(data);
}

function saveLocation(request, response) {
  const data = request.body;
  const id = request.params.id;

  if (data.siteId === id) {
    Location.saveDocument(id, data);
  } else {
    response.status(400);
  }

  response.setHeader('Content-Type', 'application/json');
  response.send(data);
}
