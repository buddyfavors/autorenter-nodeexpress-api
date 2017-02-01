'use strict';

const express = require('express');
const router = new express.Router();

module.exports = router;

/**
 * @swagger
 * definition:
 *   Vehicle:
 *     properties:
 *       id:
 *         type: string
 *       locationId:
 *         type: string
 *       vin:
 *         type: string
 *       makeId:
 *         type: string
 *       modelId:
 *         type: string
 *       year:
 *         type: integer
 *       miles:
 *         type: integer
 *       color:
 *         type: string
 *       isRentToOwn:
 *         type: boolean
 */

/**
 * @swagger
 * /api/locations/:locationId/vehicles:
 *   get:
 *     tags:
 *       - Vehicles
 *     description: Returns all vehicles for a location
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of vehicles
 *         schema:
 *           $ref: '#/definitions/Vehicle'
 */

router.get('/locations/:locationId/vehicles', require('./getAllVehicles'));
router.get('/vehicles/:id', require('./getVehicle'));
router.post('/locations/:locationId/vehicles', require('./postVehicle'));
router.put('/vehicles/:id', require('./putVehicle'));
router.delete('/vehicles/:id', require('./deleteVehicle'));
