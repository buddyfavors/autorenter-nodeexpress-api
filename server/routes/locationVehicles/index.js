'use strict';

const express = require('express');
const router = new express.Router();

module.exports = router;

router.get('/locations/:locationId/vehicles', require('./getAllLocationVehicles'));
router.get('/vehicles/:id', require('./getLocationVehicle'));
router.post('/locations/:locationId/vehicles', require('./postLocationVehicle'));
router.put('/vehicles/:id', require('./putLocationVehicle'));
router.delete('/vehicles/:id', require('./deleteLocationVehicle'));
