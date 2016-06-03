'use strict';

const express = require('express');

const pkgJSON = require('../../package.json');
var sequelize = require('sequelize');
var config = require('../config.js');
var sequelize = new Sequelize(config.database.database, config.database.username, config.database.password, config.database);
var db = {};

function addLogs(level,username,logmessage) { 

var sqlInsert = "INSERT INTO Autorenter_logs " + " (level, UserName, Message) VALUES (level,username,logmessage)";
 //log entry


sequelize.query(sqlInsert)
//TO Do: On success add in file
.onsuccess(function(result) {
 console.log(result);
  })
.catch(function(err){
    
  //  winston.log('error', "Log not added  :" + err);
    //TO Do: remove this after verification :Temperory code
   console.log(err);
  })
}
module.exports = addLogs;