'use strict';

const assert = require('assert');
const fs = require('fs');
const saveDocument = require('../../../server/models/JsonFiles/saveDocument');
const path = require('path');
const sinon = require('sinon');

describe('models/JsonFiles/saveDocument', () => {

  const mockModel = {
    pathname: 'sample/path/name',
    saveDocument: saveDocument
  };
  const testObject = { a: 123, b: 456 };

  let writeFileSyncStub;

  beforeEach(() => {
    writeFileSyncStub = sinon.stub(fs, 'writeFileSync')
      .returns(JSON.stringify(testObject));
  });

  afterEach(() => writeFileSyncStub.restore());


  it.skip('writes a serialized JSON string to a file', () => {

  });

  it.skip('writes a serialized JSON string to a file with a custom filename', () => {

  });

  it.skip('quiets eslint until the tests are written', () => {
    assert.equal(mockModel, false);
    assert.equal(path, false);
  });
});
