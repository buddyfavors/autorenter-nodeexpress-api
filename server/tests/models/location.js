'use strict';
const models = require('../../models');
const helpers = require('./helpers');

describe('models/Location', () => {

  let locationObject1 = {
    siteId: 'ZZ1',
    name: 'Test Location 1',
    city: 'Test City 1',
    stateId: 2
  };

  let locationObject2 = {
    siteId: 'ZZ2',
    name: 'Test Location 2',
    city: 'Test City 2',
    stateId: 1
  };

  helpers.testCanSave(models, models.Location, locationObject1);

  helpers.testRequiredField(models, models.Location, locationObject1, 'siteId');
  helpers.testRequiredField(models, models.Location, locationObject1, 'name');
  helpers.testRequiredField(models, models.Location, locationObject1, 'stateId');

  helpers.testUniqueField(models, models.Location, locationObject1, locationObject2, 'siteId');

});
