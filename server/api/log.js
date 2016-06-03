'use strict';
const expect = require('chai').expect;
const models = require('../models');
const debug = require('debug')('sql');
//Level : {error:  warn:  info }

module.exports = (UserName, Level, Message) => {
let objLogging = {     
    UserName: UserName,   
    Level: Level,
    Message: Message
  };



 models.AutoRenter_Log.create(objLogging)

 .error(function(err){
   debug('Error occured while adding logs :' + err);;
})
 .finally(() => {  	debug('Please check AutoRenter_Log for log entry.'); }
 	);

};
