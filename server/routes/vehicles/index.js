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
 *         readOnly: true
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
 *       image:
 *         type: binary
 */

/**
 * @swagger
 * /locations/{locationId}/vehicles:
 *   get:
 *     tags:
 *       - Vehicles
 *     description: Returns all vehicles for a location
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: locationId
 *         description: The Location id
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: An array of vehicles
 *         schema:
 *           type: array
 *           items:
 *             $ref: '#/definitions/Vehicle'
 */
router.get('/locations/:locationId/vehicles', require('./getAllVehicles'));

/**
 * @swagger
 * /vehicles/{id}:
 *   get:
 *     tags:
 *       - Vehicles
 *     description: Returns a single vehicle
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: The vehicle id
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
 * /locations/{locationId}/vehicles:
 *   post:
 *     tags:
 *       - Vehicles
 *     description: Creates a new vehicle at the specified location
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: locationId
 *         description: The location id
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
 *       201:
 *         description: Successfully created
 */
router.post('/locations/:locationId/vehicles', require('./postVehicle'));


/**
 * @swagger
 * /vehicles/{id}:
 *   put:
 *     tags:
 *       - Vehicles
 *     description: Updates a single vehicle
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: The vehicle id
 *         in: path
 *         required: true
 *         type: string
 *       - name: vehicle
 *         in: body
 *         description: Vehicle object
 *         schema:
 *           $ref: '#/definitions/Vehicle'
 *     responses:
 *       200:
 *         description: Successfully updated
 */
router.put('/vehicles/:id', require('./putVehicle'));

/**
 * @swagger
 * /vehicles/{id}:
 *   delete:
 *     tags:
 *       - Vehicles
 *     description: Deletes a single vehicle
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: The vehicle id
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       204:
 *         description: Successfully deleted
 */
router.delete('/vehicles/:id', require('./deleteVehicle'));
