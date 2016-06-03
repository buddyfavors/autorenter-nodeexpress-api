'use strict';
const models = require('../../models');
const helpers = require('./helpers');

describe('models/AutoRenter_Log', () => {

  let logging1 = {
    id:1,
    UserName: 'Devashri',
    Timestamp: '2016-03-06T00:00:00.000Z',
    Level: 'Test City 1',
    Message: 'Error'
  };

  let logging2 = {
    id:2,
     UserName: 'Ray',
    Timestamp: '2016-03-06T00:00:00.000Z',
    city: 'Test City 2',
    Message: 'Error'
  };

  helpers.testCanSave(models, models.AutoRenter_Log, logging1);

  helpers.testRequiredField(models, models.AutoRenter_Log, logging1, 'UserName');
  helpers.testRequiredField(models, models.AutoRenter_Log, logging1, 'Timestamp');
  helpers.testRequiredField(models, models.AutoRenter_Log, logging1, 'Level');
  helpers.testRequiredField(models, models.AutoRenter_Log, logging1, 'Message');
  

});
