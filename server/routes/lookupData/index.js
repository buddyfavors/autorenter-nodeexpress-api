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
 * /lookup-data:
 *   get:
 *     tags:
 *       - LookupData
 *     description: Returns all LookupData
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: states
 *         description: Returns states LookupData.
 *         in: query
 *         required: false
 *         type: string
 *       - name: makes
 *         description: Returns makes LookupData.
 *         in: query
 *         required: false
 *         type: string
 *       - name: models
 *         description: Returns models LookupData.
 *         in: query
 *         required: false
 *         type: string
 *     responses:
 *       200:
 *         description: An array of LookupData
 *         schema:
 *           $ref: '#/definitions/LookupData'
 */
router.get('/lookup-data', require('./getLookupData'));
