'use strict';

const assert = require('assert');
const fs = require('fs');
const removeDocument = require('../../../server/models/JsonFiles/removeDocument');
const path = require('path');
const sinon = require('sinon');

describe('models/JsonFiles/removeDocument', () => {

  const mockModel = {
    pathname: 'sample/path/name',
    removeDocument: removeDocument
  };
  const testObject = { a: 123, b: 456 };

  let readFileSyncStub;
  let unlinkSyncStub;

  beforeEach(() => {
    readFileSyncStub = sinon.stub(fs, 'readFileSync')
      .returns(JSON.stringify(testObject));
    unlinkSyncStub = sinon.stub(fs, 'unlinkSync')
      .returns(JSON.stringify(testObject));
  });

  afterEach(() => unlinkSyncStub.restore());

  it.skip('removes a document', () => {
    assert(false);
  });

  it.skip('quiets eslint until the tests are written', () => {
    assert.equal(mockModel, false);
    assert.equal(path, false);
    assert.equal(readFileSyncStub, false);
  });
});
