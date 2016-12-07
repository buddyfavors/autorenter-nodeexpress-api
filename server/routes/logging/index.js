'use strict';

const express = require('express');
const router = express.Router();

module.exports = router;

router.post('/log', require('./postlog'));
