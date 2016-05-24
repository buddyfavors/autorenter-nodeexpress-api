'use strict';
const models = require('../../models');
const helpers = require('./helpers');

describe('models/ActivityLog', () => {

  let activityLogObject1 = {
    refType: 'user',
    refId: 1,
    description: 'Tested stuff.',
    createdBy: 1,
    updatedBy: 1
  };

  helpers.testCanSave(models, models.ActivityLog, activityLogObject1);

  // Hmm... anything else?
  // TODO I can see redundantly storing descriptions and refTypes causing issues.
  // Those should be broken out into separate table(s) such that this is more or less just an xref.

});
