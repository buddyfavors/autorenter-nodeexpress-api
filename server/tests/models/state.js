'use strict';
const models = require('../../models');
const helpers = require('./helpers');

describe('models/State', () => {
  const stateObject1 = {
    stateCode: 'FA',
    name: 'Republic of Fusion Alliance'
  };

  const stateObject2 = {
    stateCode: 'JK',
    name: 'My Personal State'
  };

  helpers.testCanSave(models, models.State, stateObject1);

  helpers.testRequiredField(models, models.State, stateObject1, 'stateCode');
  helpers.testRequiredField(models, models.State, stateObject1, 'name');

  helpers.testUniqueField(models, models.State, stateObject1, stateObject2, 'stateCode');
});
