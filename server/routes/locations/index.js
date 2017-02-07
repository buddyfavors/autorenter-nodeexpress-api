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
 * Get all locations route
 * @swagger
 * /locations:
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

/**
 * @swagger
 * /locations/{id}:
 *   get:
 *     tags:
 *       - Locations
 *     description: Returns a single location
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Location's id
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: A single location
 *         schema:
 *           $ref: '#/definitions/Location'
 */
router.get('/locations/:id', require('./getLocation'));

/**
 * @swagger
 * /locations:
 *   post:
 *     tags:
 *       - Locations
 *     description: Creates a new location
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: location
 *         description: Location object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Location'
 *     responses:
 *       200:
 *         description: Successfully created
 */
router.post('/locations', require('./postLocation'));

/**
 * @swagger
 * /locations/{id}:
 *   put:
 *     tags:
 *       - Locations
 *     description: Updates a single location
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Location's id
 *         in: path
 *         required: true
 *         type: string
 *       - name: location
 *         in: body
 *         description: Fields for the Location resource
 *         schema:
 *           type: array
 *           $ref: '#/definitions/Location'
 *     responses:
 *       200:
 *         description: Successfully updated
 */
router.put('/locations/:id', require('./putLocation'));

/**
 * @swagger
 * /locations/{id}:
 *   delete:
 *     tags:
 *       - Locations
 *     description: Deletes a single location
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Location's id
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Successfully deleted
 */
router.delete('/locations/:id', require('./deleteLocation'));
