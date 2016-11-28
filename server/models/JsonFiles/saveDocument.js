'use strict';

module.exports = saveDocument;

const fs = require('fs');
const path = require('path');

function saveDocument(pathname, id, data) {
  const contents = JSON.stringify(data);
  const filename = path.join(pathname, `${id}.json`);
  fs.writeFileSync(filename, contents, 'utf8');
  return data;
}
