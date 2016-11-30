'use strict';

const express = require('express');
const router = express.Router();

module.exports = router;

router.get('/vehicles', require('./getAllVehicles'));
router.get('/vehicles/:id', require('./getVehicle'));
router.post('/locations/:locationId/vehicles', require('./createVehicle'));
router.put('/vehicles/:id', require('./saveVehicle'));
router.delete('/vehicles/:id', require('./removeVehicle'));
