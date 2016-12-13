'use strict';

const assert = require('assert');
const fs = require('fs');
const getDocument = require('../../../server/models/JsonFiles/getDocument');
const path = require('path');
const sinon = require('sinon');

describe('models/JsonFiles/getDocument', () => {

  const mockModel = {
    pathname: 'sample/path/name',
    getDocument: getDocument
  };
  const testObject = { a: 123, b: 456 };

  let readFileSyncStub;

  beforeEach(() => {
    readFileSyncStub = sinon.stub(fs, 'readFileSync')
      .returns(JSON.stringify(testObject));
  });

  afterEach(() => readFileSyncStub.restore());

  it.skip('opens a JSON file using the pathname and ID', () => {
    const id = 'abc';

    mockModel.getDocument(id);

    const filename = readFileSyncStub.firstCall.args[0];
    assert(path.dirname(filename) === mockModel.pathname);
    assert(path.extname(filename) === '.json');
    assert(path.basename(filename, '.json') === id);
  });

  it('deserializes a JSON string from a file', () => {
    const obj = { a: 123, b: 456 };

    const objRead = mockModel.getDocument(1);

    assert(objRead.b === obj.b);
  });

});
