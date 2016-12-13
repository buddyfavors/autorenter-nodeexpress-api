'use strict';

const express = require('express');
const router = express.Router();

module.exports = router;

router.get('/locations', require('./getAllLocations'));
router.get('/locations/:id', require('./getLocation'));
router.post('/locations', require('./postLocation'));
router.put('/locations/:id', require('./putLocation'));
router.delete('/locations/:id', require('./deleteLocation'));
