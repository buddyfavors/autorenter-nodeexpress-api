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
 *     description: Forces a server error, and returns the error message
 *     produces:
 *       - application/json
 *     responses:
 *       500:
 *         description: Server error
 */
router.get('/raise-error', require('./getRaiseError'));
