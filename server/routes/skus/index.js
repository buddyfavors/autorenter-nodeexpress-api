'use strict';

const express = require('express');
const router = new express.Router();

module.exports = router;

/**
 * @swagger
 * definition:
 *   Sku:
 *     properties:
 *       makeId:
 *         type: string
 *       modelId:
 *         type: string
 *       year:
 *         type: integer
 *       color:
 *         type: string
 */

/**
 * @swagger
 * /skus:
 *   get:
 *     tags:
 *       - Skus
 *     description: Returns all skus
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of skus
 *         schema:
 *           type: array
 *           items:
 *             $ref: '#/definitions/Sku'
 */
router.get('/skus', require('./getSkus'));
