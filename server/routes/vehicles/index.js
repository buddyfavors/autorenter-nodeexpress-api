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
 * /api/locations/{locationId}/vehicles:
 *   get:
 *     tags:
 *       - Vehicles
 *     description: Returns all vehicles for a location
 *     produces:
 *       - application/json
 *     parameters:
 *       - locationId: locationId
 *         description: Location's id
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: An array of vehicles
 *         schema:
 *           $ref: '#/definitions/Vehicle'
 */
router.get('/locations/:locationId/vehicles', require('./getAllVehicles'));

/**
 * @swagger
 * /api/vehicles/{id}:
 *   get:
 *     tags:
 *       - Vehicles
 *     description: Returns a single vehicle
 *     produces:
 *       - application/json
 *     parameters:
 *       - vehicleId: id
 *         description: Vehicle's id
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: A single vehicle
 *         schema:
 *           $ref: '#/definitions/Vehicle'
 */
router.get('/vehicles/:id', require('./getVehicle'));

/**
 * @swagger
 * /api/locations/{locationId}/vehicles:
 *   post:
 *     tags:
 *       - Vehicles
 *     description: Creates a new vehicle
 *     produces:
 *       - application/json
 *     parameters:
 *       - locationId: locationId
 *         description: Location's id
 *         in: path
 *         required: true
 *         type: string
 *       - name: vehicle
 *         description: Vehicle object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Vehicle'
 *     responses:
 *       200:
 *         description: Successfully created
 */
router.post('/locations/:locationId/vehicles', require('./postVehicle'));


/**
 * @swagger
 * /api/vehicles/{id}:
 *   put:
 *     tags:
 *       - Vehicles
 *     description: Updates a single vehicle
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Vehicle's id
 *         in: path
 *         required: true
 *         type: string
 *       - name: vehicle
 *         in: body
 *         description: Fields for the Vehicle resource
 *         schema:
 *           type: array
 *           $ref: '#/definitions/Vehicle'
 *     responses:
 *       200:
 *         description: Successfully updated
 */
router.put('/vehicles/:id', require('./putVehicle'));

/**
 * @swagger
 * /api/vehicles/{id}:
 *   delete:
 *     tags:
 *       - Vehicles
 *     description: Deletes a single vehicle
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Vehicle's id
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Successfully deleted
 */
router.delete('/vehicles/:id', require('./deleteVehicle'));
