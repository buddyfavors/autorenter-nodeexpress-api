'use strict';

const express = require('express');
const router = new express.Router();

module.exports = router;

router.get('/lookup-data', require('./getLookupData'));
