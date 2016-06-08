'use strict';
const models = require('../../server/models');
const helpers = require('./helpers');

describe('models/User', () => {
  const userObject1 = {
    username: 'testuser1',
    ldapEnabled: true,
    userAdmin: true,
    fleetAdmin: true,
    brandAdmin: true
  };

  const userObject2 = {
    username: 'testuser2',
    ldapEnabled: false,
    userAdmin: false,
    fleetAdmin: false,
    brandAdmin: false
  };

  helpers.testCanSave(models, models.User, userObject1);

  helpers.testRequiredField(models, models.User, userObject1, 'username');
  helpers.testRequiredField(models, models.User, userObject1, 'ldapEnabled');
  helpers.testRequiredField(models, models.User, userObject1, 'userAdmin');
  helpers.testRequiredField(models, models.User, userObject1, 'fleetAdmin');
  helpers.testRequiredField(models, models.User, userObject1, 'brandingAdmin');

  helpers.testUniqueField(models, models.User, userObject1, userObject2, 'username');
});
