'use strict';

module.exports = JsonFiles;

const crypto = require('crypto');
const getAllDocuments = require('./getAllDocuments');
const getDocument = require('./getDocument');
const path = require('path');
const removeDocument = require('./removeDocument');
const saveDocument = require('./saveDocument');

function JsonFiles(name) {
  this.pathname = path.resolve(__dirname, '../../data', name);
}

JsonFiles.prototype.getAllDocuments = function () {
  return getAllDocuments(this.pathname);
};

JsonFiles.prototype.getDocument = function (id) {
  return getDocument(this.pathname, id);
};

JsonFiles.prototype.removeDocument = function (id) {
  return removeDocument(this.pathname, id);
};

JsonFiles.prototype.saveDocument = function (id, data) {
  if (!id) {
    const hash = crypto.createHash('sha1');
    hash.update(Date.now().toString());
    hash.update(JSON.stringify(data));
    id = data.id = hash.digest('hex');  // eslint-disable-line no-param-reassign
  }
  return saveDocument(this.pathname, id, data);
};
