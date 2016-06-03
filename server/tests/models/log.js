'use strict';
const models = require('../../models');
const helpers = require('./helpers');

describe('models/AutoRenter_Log', () => {

  let logging1 = {
   
    UserName: 'Devashri',
    Level: 'Info',
    Message: 'Database testing'
  };

  let logging2 = {
   
     UserName: 'Ray',
    city: 'Info',
    Message: 'Database testing'
  };

  helpers.testCanSave(models, models.AutoRenter_Log, logging1);

  helpers.testRequiredField(models, models.AutoRenter_Log, logging1, 'UserName');

  helpers.testRequiredField(models, models.AutoRenter_Log, logging1, 'Level');
  helpers.testRequiredField(models, models.AutoRenter_Log, logging1, 'Message');
  

});
