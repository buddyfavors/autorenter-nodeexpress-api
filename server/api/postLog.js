'use strict';

const models = require('../models');
const debug = require('debug')('sql');
const postLogDB = require('../services/postLogDB');

//Level : {error:  warn:  info }
function postLog(request, response) {
 return postLogDB(request.body.username,request.body.level,request.body.message)
.then(function(finalVal) {
     return  response.status(201).json({ message: 'Log Added sucessfully!' });
}, function(error) {
     return  response.status(500).json({ message: 'Log Added sucessfully!' });
});

}

module.exports = postLog;
