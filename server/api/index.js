'use strict';
var express   = require('express');
const pkgJSON = require('../../package.json');
var config = require('../config.js');
var sequelize = require('sequelize');
const models = require('../models');


//var sequelize = new Sequelize(config.database.database, config.database.username, config.database.password, config.database);
var sequelize = new Sequelize('auto_renter', 'postgres', 'postgres', config.database);
var db = {};
var sqlInsert = "INSERT INTO Autorenter_logs " + " (level, UserName, Message) VALUES (1,'Devashri Oza','Log messages')";

sequelize.query(sqlInsert)
//TO Do: On success add in file
.onsuccess(function(result) {
    console.log(result);
  })
.catch(function(err){
    
  //  winston.log('error', "Log not added  :" + err);
    //TO Do: remove this after verification :Temperory code
  console.log(err);
 });
const getRoot = require('./getRoot');
module.exports = {
  getRoot
};

