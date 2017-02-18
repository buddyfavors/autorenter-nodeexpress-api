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
 *         type: array
 *         description: An array of State objects
 *         items:
 *           $ref: '#/definitions/State'
 *       makes:
 *         type: array
 *         description: An array of Make objects
 *         items:
 *           $ref: '#/definitions/Make'
 *       models:
 *         type: array
 *         description: An array of Model objects
 *         items:
 *           $ref: '#/definitions/Model'
 */

/**
 * @swagger
 * /lookup-data:
 *   get:
 *     tags:
 *       - LookupData
 *     description: Returns a LookupData object containing requested types of data
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: states
 *         description: Includes States in the response
 *         in: query
 *         required: false
 *         type: string
 *       - name: makes
 *         description: Includes Makes in the response
 *         in: query
 *         required: false
 *         type: string
 *       - name: models
 *         description: Includes Models in the response
 *         in: query
 *         required: false
 *         type: string
 *     responses:
 *       200:
 *         description: A LookupData object
 *         schema:
 *           $ref: '#/definitions/LookupData'
 */
router.get('/lookup-data', require('./getLookupData'));
