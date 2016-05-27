'use strict';
const models = require('../../models');
const helpers = require('./helpers');

describe('models/Setting', () => {
  const settingObject1 = {
    name: 'test setting 1',
    type: 'image',
    value: 'whatever'
  };

  const settingObject2 = {
    name: 'test setting 2',
    type: 'pdf',
    value: 'something else'
  };

  helpers.testCanSave(models, models.Setting, settingObject1);

  helpers.testRequiredField(models, models.Setting, settingObject1, 'name');
  helpers.testRequiredField(models, models.Setting, settingObject1, 'value');

  helpers.testUniqueField(models, models.Setting, settingObject1, settingObject2, 'name');
});
