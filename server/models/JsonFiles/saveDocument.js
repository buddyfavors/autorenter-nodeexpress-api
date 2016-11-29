'use strict';

module.exports = saveDocument;

const fs = require('fs');
const generateId = require('./generateId');
const path = require('path');

function saveDocument(id, data) {
  const contents = JSON.stringify(data);
  const filename = path.join(this.pathname, `${id}.json`);
  id = id || generateId(data);
  fs.writeFileSync(filename, contents, 'utf8');
  return data;
}
