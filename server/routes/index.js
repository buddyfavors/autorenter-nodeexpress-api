'use strict';

const express = require('express');
const router = express.Router();


module.exports = router;

router.use(require('./locations'));
router.use(require('./vehicles'));
router.use(require('./logging'));
router.use(require('./raiseError'));
