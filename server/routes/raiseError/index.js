'use strict';

const express = require('express');
const router = new express.Router();

module.exports = router;

/**
 * @swagger
 * /raise-error:
 *   get:
 *     tags:
 *       - RaiseError
 *     description: Returns an api error message
 *     produces:
 *       - application/json
 *     responses:
 *       500:
 *         description: An error message from the api
 */
router.get('/raise-error', require('./getRaiseError'));
