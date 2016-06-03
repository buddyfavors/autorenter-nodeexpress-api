'use strict';




//var winston = require('winston');
var winston = require("winston");
 require("winston-postgre");
var options = {
  "connectionString" : "postgres://postgres:postgres@192.168.99.100:5432/auto_renter",
  "schema" : "public",
  "table" : "AutorenterLogs",
   tableConfig: {
    tableName: 'AutorenterLogs',
    tableFields: 'UserName, Level, Message'
  },
  UserName :'Devashri Oza',
  Level: 1,
  Message:'error occur'


};
 
winston.add(winston.transports.PostgreSQL, options);
 
winston.log(1, 'Devashri Oza','Just a simple error log');



const getRoot = require('./getRoot');

module.exports = {
  getRoot
};

