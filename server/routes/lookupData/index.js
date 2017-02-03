'use strict';

const express = require('express');
const router = new express.Router();

module.exports = router;

/**
 * @swagger
 * definition:
 *   State:
 *     properties:
 *       stateCode:
 *         type: string
 *       name:
 *         type: string
 */

/**
 * @swagger
 * definition:
 *   Make:
 *     properties:
 *       id:
 *         type: string
 *       name:
 *         type: string
 */

/**
 * @swagger
 * definition:
 *   Model:
 *     properties:
 *       id:
 *         type: string
 *       name:
 *         type: string
 */

/**
 * @swagger
 * definition:
 *   LookupData:
 *     properties:
 *       states:
 *         $ref: '#/definitions/State'
 *       makes:
 *         $ref: '#/definitions/Make'
 *       models:
 *         $ref: '#/definitions/Model'
 */

/**
 * @swagger
 * /lookup-data?{query}:
 *   get:
 *     tags:
 *       - LookupData
 *     description: Returns all LookupData
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: query
 *         description: The type of lookup data to fetch.  Can be 'states', 'makes', or 'models', separated by '&'.
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: An array of LookupData
 *         schema:
 *           $ref: '#/definitions/LookupData'
 */
router.get('/lookup-data', require('./getLookupData'));
