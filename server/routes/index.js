'use strict';

const api = require('../api');
const express = require('express');
const router = express.Router();

router.get('/', api.getRoot);

module.exports = router;
