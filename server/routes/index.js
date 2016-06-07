'use strict';

const api = require('../api');
const express = require('express');
const router = express.Router();

router.get('/', api.getRoot);
router.post('/api/log',api.postLog);

module.exports = router;
