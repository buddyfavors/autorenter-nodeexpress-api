'use strict';

const express = require('express');
const router = new express.Router();

module.exports = router;

router.post('/log', require('./postLog'));
