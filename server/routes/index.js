'use strict';

const api = require('../api');
const express = require('express');
const router = express.Router();
//var logs = require('../api/postLog');

router.get('/', api.getRoot);
router.post('/api/log',api.postLog);

module.exports = router;
