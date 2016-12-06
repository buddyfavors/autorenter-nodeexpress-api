'use strict';

const express = require('express');
const router = express.Router();
const api = require('../api');

module.exports = router;

router.use(require('./locations'));
router.use(require('./vehicles'));
router.post('/api/log', api.postLog);

