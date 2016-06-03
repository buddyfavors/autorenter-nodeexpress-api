'use strict';
const models = require('../../models');
const helpers = require('./helpers');

describe('models/AutoRenter_Log', () => {

  let logging1 = {
   
    UserName: 'Devashri',
    Level: 'Test City 1',
    Message: 'Error'
  };

  let logging2 = {
   
     UserName: 'Ray',
    city: 'Test City 2',
    Message: 'Error'
  };

  helpers.testCanSave(models, models.AutoRenter_Log, logging1);

  helpers.testRequiredField(models, models.AutoRenter_Log, logging1, 'UserName');

  helpers.testRequiredField(models, models.AutoRenter_Log, logging1, 'Level');
  helpers.testRequiredField(models, models.AutoRenter_Log, logging1, 'Message');
  

});
