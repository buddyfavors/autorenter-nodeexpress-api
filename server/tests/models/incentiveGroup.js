'use strict';
const models = require('../../models');
const helpers = require('./helpers');

describe('models/IncentiveGroup', () => {

  let incentiveGroupObject1 = {
    locationId: 1,
    priority: 2,
    name: 'Silver',
    startDate: '2015-03-01T00:00:00.000Z',
    endDate: '2016-03-01T00:00:00.000Z'
  };

  helpers.testCanSave(models, models.IncentiveGroup, incentiveGroupObject1);

  helpers.testRequiredField(models, models.IncentiveGroup, incentiveGroupObject1, 'name');
  helpers.testRequiredField(models, models.IncentiveGroup, incentiveGroupObject1, 'priority');
  helpers.testRequiredField(models, models.IncentiveGroup, incentiveGroupObject1, 'locationId');

  // TODO Test relations?

});
