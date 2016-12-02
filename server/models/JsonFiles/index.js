'use strict';

module.exports = JsonFiles;

const path = require('path');

function JsonFiles(name) {
  this.pathname = path.resolve(__dirname, '../../data', name);
}

JsonFiles.prototype.getAllDocuments = require('./getAllDocuments');
JsonFiles.prototype.getDocument = require('./getDocument');
JsonFiles.prototype.removeDocument = require('./removeDocument');
JsonFiles.prototype.saveDocument = require('./saveDocument');
JsonFiles.prototype.generateId = require('./generateId');
