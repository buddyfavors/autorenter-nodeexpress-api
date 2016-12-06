'use strict';

module.exports = saveDocument;

const fs = require('fs');
const generateId = require('./generateId');
const path = require('path');

function saveDocument(id, data) {
  id = id || generateId(data);
  const contents = JSON.stringify(data);
  const filename = path.join(this.pathname, `${id}.json`);
  fs.writeFileSync(filename, contents, 'utf8');
  return data;
}
