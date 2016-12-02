'use strict';

const assert = require('assert');
const fs = require('fs');
const getAllDocuments = require('../../../server/models/JsonFiles/getAllDocuments');
const path = require('path');
const sinon = require('sinon');

describe('models/JsonFiles/getAllDocuments', () => {

  const mockModel = {
    pathname: 'sample/path/name',
    getAllDocuments: getAllDocuments,
  };

  const testObjects = [{ a: 123, b: 456 }, { a: 'foo', b: 'bar' }];

  let readdirSyncStub;

  beforeEach(() => {
    readdirSyncStub = sinon.stub(fs, 'readdirSync')
      .returns(testObjects);
  });

  afterEach(() => {
    readdirSyncStub.restore();
  });

  it.skip('opens the JSON files', () => {
    assert(false);
  });

  it.skip('deserializes JSON strings from a files into an array', () => {
    assert(false);
  });

});
