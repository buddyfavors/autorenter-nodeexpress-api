'use strict';

const models = require('../models');
const debug = require('debug')('sql');

function logDetail(username, level, message) {
   let objLogging = {
    username: username,
    level: level,
    message: message
  };
  return models.Log.create(objLogging).then(function() {
     debug('Log added');
  })
  .error(function(err){
   debug('Error occured while adding logs :' + err);
   throw err;
  });
}

module.exports = logDetail;
