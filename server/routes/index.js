'use strict';

const express = require('express');
const router = module.exports = express.Router();  // eslint-disable-line new-cap

router.use(require('./locations'));
router.use(require('./vehicles'));
