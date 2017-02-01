'use strict';

const express = require('express');
const router = new express.Router();

module.exports = router;

/**
 * @swagger
 * definition:
 *   Location:
 *     properties:
 *       id:
 *         type: string
 *       siteId:
 *         type: string
 *       name:
 *         type: string
 *       city:
 *         type: string
 *       stateCode:
 *         type: string
 */

/**
 * @swagger
 * /api/locations:
 *   get:
 *     tags:
 *       - Locations
 *     description: Returns all locations
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of locations
 *         schema:
 *           $ref: '#/definitions/Location'
 */
router.get('/locations', require('./getAllLocations'));
router.get('/locations/:id', require('./getLocation'));
router.post('/locations', require('./postLocation'));
router.put('/locations/:id', require('./putLocation'));
router.delete('/locations/:id', require('./deleteLocation'));
