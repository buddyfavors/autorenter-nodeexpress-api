'use strict';

const api = require('../api');
const express = require('express');
const router = express.Router();
var logs = require('../api/postLog');

router.get('/', api.getRoot);
router.get('api/log', logs);

module.exports = router;
