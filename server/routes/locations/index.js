'use strict';

module.exports = createLocationsRouter();

const express = require('express');

function createLocationsRouter() {
  const router = express.Router();

  router.get('/locations', require('./getAllLocations'));
  router.get('/locations/:id', require('./getLocation'));
  router.post('/locations', require('./createLocation'));
  router.put('/locations/:id', require('./saveLocation'));
  router.delete('/locations/:id', require('./removeLocation'));

  return router;
}
