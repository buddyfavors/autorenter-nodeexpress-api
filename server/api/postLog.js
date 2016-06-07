'use strict';

const models = require('../models');
const debug = require('debug')('sql');

//Level : {error:  warn:  info }
function postLog(request, response) {

  let objLogging = {
    UserName: request.body.UserName,
    Level: request.body.Level,
    Message: request.body.Message
  };

  models.AutoRenter_Log.create(objLogging).then(function(log) {
    response.status(201).json({ message: 'Log Added sucessfully!' });
  })
  .error(function(err){
    debug('Error occured while adding logs :' + err);
    response.status(500).json({});
  })
  .finally(() => {  	debug('Please check AutoRenter_Log for log entry.'); });
}

module.exports = postLog;
