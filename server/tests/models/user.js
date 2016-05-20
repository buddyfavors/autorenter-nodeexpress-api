'use strict';
const models = require('../../models');
const helpers = require('./helpers');

describe('models/User', () => {

    let validOptions1 = {
        username: 'testuser1',
        ldapEnabled: true,
        userAdmin: true,
        fleetAdmin: true,
        brandAdmin: true
    };

    let validOptions2 = {
        username: 'testuser2',
        ldapEnabled: false,
        userAdmin: false,
        fleetAdmin: false,
        brandAdmin: false
    };

    helpers.testCanSave(models, models.User, validOptions1);

    helpers.testRequiredField(models, models.User, validOptions1, 'username');
    helpers.testRequiredField(models, models.User, validOptions1, 'ldapEnabled');
    helpers.testRequiredField(models, models.User, validOptions1, 'userAdmin');
    helpers.testRequiredField(models, models.User, validOptions1, 'fleetAdmin');
    helpers.testRequiredField(models, models.User, validOptions1, 'brandingAdmin');

    helpers.testUniqueField(models, models.User, validOptions1, validOptions2, 'username');

});
