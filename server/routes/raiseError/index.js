'use strict';

const express = require('express');
const router = express.Router();

module.exports = router;

router.get('/raise-error', require('./getRaiseError'));
