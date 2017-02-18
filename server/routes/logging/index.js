'use strict';

const express = require('express');
const router = new express.Router();

module.exports = router;

/**
 * @swagger
 * definition:
 *   Log:
 *     properties:
 *       username:
 *         type: string
 *       level:
 *         type: string
 *       message:
 *         type: string
 */

/**
 * @swagger
 * /log:
 *   post:
 *     tags:
 *       - Log
 *     description: Creates a new log entry
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: log
 *         description: log object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Log'
 *     responses:
 *       201:
 *         description: Successfully created
 */
router.post('/log', require('./postLog'));
