'use strict';

const express = require('express');
const router = express.Router();

module.exports = router;

router.get('/locations', require('./getAllLocations'));
router.get('/locations/:id', require('./getLocation'));
router.post('/locations', require('./createLocation'));
router.put('/locations/:id', require('./saveLocation'));
router.delete('/locations/:id', require('./removeLocation'));
