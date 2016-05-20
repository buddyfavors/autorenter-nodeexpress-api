'use strict';
const models = require('../../models');
const helpers = require('./helpers');

describe('models/Setting', () => {

  let validOptions1 = {
    name: 'test setting 1',
    type: 'image',
    value: 'whatever'
  };

  let validOptions2 = {
    name: 'test setting 2',
    type: 'pdf',
    value: 'something else'
  };

  helpers.testCanSave(models, models.Setting, validOptions1);

  helpers.testRequiredField(models, models.Setting, validOptions1, 'name');
  helpers.testRequiredField(models, models.Setting, validOptions1, 'value');

  helpers.testUniqueField(models, models.Setting, validOptions1, validOptions2, 'name');

});
