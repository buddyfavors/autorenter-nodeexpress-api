'use strict';

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const sinon = require('sinon');

const logDetail = require('../../server/services/logDetail');
const logger = require('../../server/services/logger');
const errorTypes = require('../../server/models/errorTypes');

const assert = chai.assert;
const expect = chai.expect;

chai.use(chaiAsPromised);

describe('logDetail', () => {
  const username = 'AutoRenter';
  const level = 'info';
  let message = null;

  describe('on error', () => {
    let consoleStub;

    beforeEach(() => {
      consoleStub = sinon.stub(console, 'error');
    });

    it('writes to console the error that prevented persistent logging', () => {
      const expectedWriteErrorMessage =
        'The following error prevented writing the log object: Error: Log message was empty.';
      return logDetail.execute(username, level, message)
          .then((err) => {
            assert(false);
          })
        .catch((err) => {
          expect(consoleStub.calledWith(expectedWriteErrorMessage)).to.be.true;
        });
    });

    it('writes to console the data that could not be logged', () => {
      const logData = {username, level, message};
      const expectedDataArg =
        `Here is the data that could not be logged: ${JSON.stringify(logData)}.`;
      return logDetail.execute(username, level, message)
          .then(() => {
            assert(false);
          })
        .catch((err) => {
          expect(consoleStub.calledWith(expectedDataArg)).to.be.true;
        });
    });

    it('throws error with correct errorType', () => {
      return logDetail.execute(username, level, message)
        .then(() => {
          assert(false);
        })
        .catch((err) => {
          expect(err.errorType).to.eql(errorTypes.loggingError);
        });
    });

    afterEach(() => {
      consoleStub.restore();
    });
  });

  describe('on success', () => {
    let logStub;
    let debugStub;
    beforeEach(() => {
      message = 'the message';
      logStub = sinon.stub(logger, 'log');
      debugStub = sinon.stub(logger, 'debug');
    });

    it('writes to the logger', () => {
      const expectedLogMessage =
        `(${level}) ${username} - ${message}`;
      return logDetail.execute(username, level, message)
        .then((err) => {
          expect(logStub.calledWith(level, expectedLogMessage)).to.be.true;
        });
    });

    it('writes debug message to logger that the log entry was added', () => {
      return logDetail.execute(username, level, message)
        .then(() => {
          assert(false);
        })
        .catch((err) => {
          expect(debugStub.calledWith('Log added')).to.be.true;
        });
    });

    afterEach(() => {
      logStub.restore();
      debugStub.restore();
    });
  });
});

