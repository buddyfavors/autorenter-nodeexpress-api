'use strict';

const models = require('../models');
const debug = require('debug')('sql');

function postLogDB(username, level, message) {
  let logCreated = false;
  let objLogging = {
    username: username,
    level: level,
    message: message
  };
  models.Log.create(objLogging).then(function() {
     debug('Log added');
     logCreated=true;
     return logCreated; 
  })
  .error(function(err){
   debug('Error occured while adding logs :' + err);
   logCreated = false;
     return logCreated;     
  });
}

module.exports = postLogDB;
