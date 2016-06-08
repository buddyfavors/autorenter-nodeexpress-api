'use strict';

const api = require('../api');
const express = require('express');

const router = express.Router(); // eslint-disable-line new-cap

router.get('/', api.getRoot);
router.post('/api/log',api.postLog);

module.exports = router;
