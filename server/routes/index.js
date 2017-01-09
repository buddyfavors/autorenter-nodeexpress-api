'use strict';

const express = require('express');
const router = new express.Router();

module.exports = router;

router.get('/', require('./getRoot'));
router.use(require('./locations'));
router.use(require('./logging'));
router.use(require('./lookupData'));
router.use(require('./raiseError'));
router.use(require('./skus'));
router.use(require('./vehicles'));
