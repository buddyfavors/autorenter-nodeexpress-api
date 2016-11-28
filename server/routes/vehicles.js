'use strict';

const express = require('express');
const router = module.exports = express.Router();  // eslint-disable-line new-cap

const Vehicle = require('../models').Vehicle;

router.get('/vehicles', getAllVehicles);
router.get('/vehicles/:id', getVehicle);
router.post('/locations/:locationId/vehicles', createVehicle);
router.put('/vehicles/:id', saveVehicle);
router.delete('/vehicles/:id', removeVehicle);


function createVehicle(request, response) {
  const data = request.body;
  data.locationId = request.params.locationId;

  Vehicle.saveDocument(null, data);

  response.setHeader('Content-Type', 'application/json');
  response.send(data);
}

function getAllVehicles(request, response) {
  const data = Vehicle.getAllDocuments();

  response.setHeader('Content-Type', 'application/json');
  response.send(data);
}

function getVehicle(request, response) {
  const id = request.params.id;

  const data = Vehicle.getDocument(id);
  if (!data) {
    response.status(404);
  }

  response.setHeader('Content-Type', 'application/json');
  response.send(data);
}

function removeVehicle(request, response) {
  const id = request.params.id;

  const data = Vehicle.removeDocument(id);
  if (!data) {
    response.status(404);
  }

  response.setHeader('Content-Type', 'application/json');
  response.send(data);
}

function saveVehicle(request, response) {
  const data = request.body;
  const id = request.params.id;

  if (data.vin === id) {
    Vehicle.saveDocument(id, data);
  } else {
    response.status(400);
  }

  response.setHeader('Content-Type', 'application/json');
  response.send(data);
}
