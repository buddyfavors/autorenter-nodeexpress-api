'use strict';
const models = require('../../server/models');
const helpers = require('./helpers');

describe('models/Vehicle', () => {

  let vehicleObject1 = {
    vin: '1FM5K7AR8DGA89041',
    make: 'Test1',
    model: 'Bubble',
    year: 2000,
    miles: 250000,
    color: 'Lime',
    rentToOwn: false
  };

  let vehicleObject2 = {
    vin: '1GTEC14TXYE362553',
    make: 'Test2',
    model: 'Batmobile',
    year: 2015,
    miles: 20000,
    color: 'Black',
    rentToOwn: true
  };

  helpers.testCanSave(models, models.Vehicle, vehicleObject1);

  helpers.testRequiredField(models, models.Vehicle, vehicleObject1, 'vin');
  helpers.testRequiredField(models, models.Vehicle, vehicleObject1, 'make');
  helpers.testRequiredField(models, models.Vehicle, vehicleObject1, 'model');
  helpers.testRequiredField(models, models.Vehicle, vehicleObject1, 'miles');
  helpers.testRequiredField(models, models.Vehicle, vehicleObject1, 'rentToOwn');

  helpers.testUniqueField(models, models.Vehicle, vehicleObject1, vehicleObject2, 'vin');

});
