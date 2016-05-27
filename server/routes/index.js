'use strict';

const api = require('../api');
const express = require('express');

/* eslint-disable new-cap */
const router = express.Router();
/* eslint-enable new-cap */

router.get('/', api.getRoot);

module.exports = router;
