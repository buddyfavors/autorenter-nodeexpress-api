'use strict';

module.exports = JsonFiles;

const path = require('path');
const config = require('../../config');

function JsonFiles(name) {
  this.pathname = path.resolve(config.server.jsonFilesBasePath, name);
}

JsonFiles.prototype.getAllDocuments = require('./getAllDocuments');
JsonFiles.prototype.getDocument = require('./getDocument');
JsonFiles.prototype.removeDocument = require('./removeDocument');
JsonFiles.prototype.saveDocument = require('./saveDocument');
JsonFiles.prototype.generateId = require('./generateId');
