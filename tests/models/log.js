'use strict';
const models = require('../../server/models');
const helpers = require('./helpers');

describe('models/Log', () => {

  let logging1 = {

    username: 'Auto Renter1',
    level: 'Info',
    message: 'Database testing'
  };

  let logging2 = {
    username: 'Auto Renter2',
    level: 'Info',
    message: 'Database testing'
  };

  helpers.testCanSave(models, models.Log, logging1);
  helpers.testCanSave(models, models.Log, logging2);
  helpers.testRequiredField(models, models.Log, logging1, 'username');
  helpers.testRequiredField(models, models.Log, logging1, 'level');
  helpers.testRequiredField(models, models.Log, logging1, 'message');

});