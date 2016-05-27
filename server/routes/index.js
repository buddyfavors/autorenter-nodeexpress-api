'use strict';

const api = require('../api');
const express = require('express');

const router = express.Router(); // eslint-disable-line new-cap

router.get('/', api.getRoot);

module.exports = router;
