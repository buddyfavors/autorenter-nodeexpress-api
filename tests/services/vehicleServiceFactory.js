'use strict';

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

const vehicleService = require('../../server/services/vehicleService');

chai.should();
chai.use(chaiAsPromised);

describe('vehicleService', () => {
  const locationId = 'c0b694ec-3352-43e3-9f22-77c87fe83d48';

  describe('getVehicles', () => {
    let vehiclesPromise;
    beforeEach(() => {
      vehiclesPromise = vehicleService.getVehicles(locationId);
    });

    it('returns vehicle data for specified location', () => {
      return vehiclesPromise
      .then((vehicles) => {
        vehicles.should.have.length.of(2);
        vehicles.every((vehicle) => {
          return vehicle.locationId === locationId;
        }).should.be.true;
      })
      .catch((err) => {
        throw err;
      });
    });

    it('returns vehicle data enriched with make and model', () => {
      return vehiclesPromise
        .then((vehicles) => {
          vehicles.every((vehicle) => {
            return vehicle.make && vehicle.model;
          }).should.be.true;
        })
        .catch((err) => {
          throw err;
        });
    });
  });
});
