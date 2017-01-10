'use strict';

const pkgJSON = require('../../package.json');
const express = require('express');
const app = express();
const env = app.get('env');
const gitData = require('./git-data');

module.exports = gitData.then((gitData) => {
  return {
    title: pkgJSON.description,
    environment: env,
    version: pkgJSON.version,
    commit: gitData,
    get build() {
      // TODO: Update to gitData.tag once build system supports tags.
      return gitData.long;
    }
  };
});
