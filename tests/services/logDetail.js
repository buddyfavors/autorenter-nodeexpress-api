'use strict';

const chai = require('chai');
const sinon = require('sinon');

const logDetail = require('../../server/services/logDetail');
const models = require('../../server/models');

const assert = chai.assert;

describe('services/log', () => {
  const username = 'AutoRenter';
  const level = 'info';
  const message = 'test message';

  it('should save log in db', () =>
    logDetail.execute(username, level, message)
      .catch(() => { assert(false); })
  );

  describe('on error', () => {
    let consoleStub;
    let expectedError;

    beforeEach(() => {
      consoleStub = sinon.stub(console, 'error');
      expectedError = new Error('test error');
      sinon.stub(models.Log, 'create',
        () => new Promise((resolve, reject) => reject(expectedError)));
    });

    it('writes to console the error that prevented persistent logging', () => {
      const expectedWriteErrorMessage =
        'The following error prevented writing the log object to the database: Error: test error.';
      return logDetail.execute(username, level, message)
        .then(() => { assert(false); })
        .catch(() => {
          /* eslint-disable no-unused-expressions */
          consoleStub.calledWith(expectedWriteErrorMessage).should.be.true;
          /* eslint-enable no-unused-expressions */
        });
    });

    it('writes to console the data that could not be logged', () => {
      const logData = { username, level, message };
      const expectedDataArg =
        `Here is the data that could not be logged to the database ${JSON.stringify(logData)}.`;
      return logDetail.execute(username, level, message)
        .then(() => { assert(false); })
        .catch(() => {
          /* eslint-disable no-unused-expressions */
          consoleStub.calledWith(expectedDataArg).should.be.true;
          /* eslint-enable no-unused-expressions */
        });
    });

    afterEach(() => {
      models.Log.create.restore();
      console.error.restore(); // eslint-disable-line no-console
    });
  });
});

