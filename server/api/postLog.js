'use strict';

const models = require('../models');
const debug = require('debug')('sql');
const logDetail = require('../services/log');
const Promise = require("bluebird");

//Level : {error:  warn:  info }
function postLog(request, response) {
  return logDetail(request.body.username,request.body.level,request.body.message)
    .then(() => {
      return response.status(201).json({ message: 'Log added successfully!' });
    })
    .catch(() => {
      return  response.status(500).json({ message: 'Error adding log!' });
    });
}

module.exports = logDetail;
