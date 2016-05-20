'use strict';
const models = require('../../models');
const helpers = require('./helpers');

describe('models/State', () => {

  let validOptions1 = {
    stateCode: 'FA',
    name: 'Republic of Fusion Alliance'
  };

  let validOptions2 = {
    stateCode: 'JK',
    name: 'My Personal State'
  };

  helpers.testCanSave(models, models.State, validOptions1);

  helpers.testRequiredField(models, models.State, validOptions1, 'stateCode');
  helpers.testRequiredField(models, models.State, validOptions1, 'name');

  helpers.testUniqueField(models, models.State, validOptions1, validOptions2, 'stateCode');

});
