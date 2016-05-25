'use strict';

var fs = require('fs');
var path = require('path');

var exportObject = {};

fs.readdirSync(__dirname).filter(function (file) {
  return (file.indexOf('.') !== 0) && (file !== 'index.js');
}).forEach(function (file) {
  var obj = require(path.join(__dirname, file));
  exportObject[file.replace('.js', '')] = obj;
});

module.exports = exportObject;
