'use strict';

const express = require('express');
const router = new express.Router();

module.exports = router;

/**
 * @swagger
 * /:
 *   get:
 *     tags:
 *       - GetRoot
 *     description: Returns information describing the API
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: The API information
 *         schema:
 *           type: object
 *           properties:
 *             title:
 *               description: Title or description of the API
 *               type: string
 *             environment:
 *               description: Operating environment of the API
 *               type: string
 *             version:
 *               description: The API version (semver)
 *               type: string
 *             build:
 *               description: The API build number
 *               type: string
 */
router.get('/', require('./getRoot'));

router.use(require('./locations'));
router.use(require('./logging'));
router.use(require('./lookupData'));
router.use(require('./raiseError'));
router.use(require('./skus'));
router.use(require('./vehicles'));
