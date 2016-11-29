'use strict';

module.exports = createVehiclesRouter();

const express = require('express');

function createVehiclesRouter() {
  const router = express.Router();

  router.get('/vehicles', require('./getAllVehicles'));
  router.get('/vehicles/:id', require('./getVehicle'));
  router.post('/locations/:locationId/vehicles', require('./createVehicle'));
  router.put('/vehicles/:id', require('./saveVehicle'));
  router.delete('/vehicles/:id', require('./removeVehicle'));

  return router;
}
