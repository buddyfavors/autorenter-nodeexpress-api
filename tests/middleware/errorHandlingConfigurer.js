'use strict';

const chai = require('chai');
const express = require('express');
const Promise = require('bluebird');
const sinon = require('sinon');

const errorHandlingConfigurer = require('../../server/middleware/errorHandlingConfigurer');
const logDetail = require('../../server/services/logDetail');

const app = express();

chai.should();

describe('errorHandlingConfigurer', () => {
  describe('configureErrorHandling', () => {
    it('configures the app to use the logErrors function', () => {
      const useSpy = sinon.spy(app, 'use');
      errorHandlingConfigurer.configureErrorHandling(app);

      /* eslint-disable no-unused-expressions */
      useSpy.calledWith(errorHandlingConfigurer.logErrors).should.be.true;
      /* eslint-enable no-unused-expressions */
    });
  });

  describe('logErrors', () => {
    const dummyUsernameToRemoveWhenAuthIsImplemented = 'jdoe';
    let error;
    let request;
    let response;
    let next;
    let actualArgPassedToNext; // Necessary b/c can't spy on bare function.

    beforeEach(() => {
      error = { message: 'oops' };
      request = {};
      response = {
        status: (statusCode) => statusCode,
        json: (arg) => arg
      };
      next = function nextImpl(arg) {
        actualArgPassedToNext = arg;
      };
    });

    it('calls next with correct argument if headers have been sent', () => {
      response.headersSent = true;
      errorHandlingConfigurer.logErrors(error, request, response, next);
      actualArgPassedToNext.should.equal(error);
    });

    describe('if log-related', () => {
      beforeEach(() => {
        error.customType = 'fa.logError';
      });

      it('sets response status code', () => {
        const statusSpy = sinon.spy(response, 'status');
        errorHandlingConfigurer.logErrors(error, request, response, next);

        /* eslint-disable no-unused-expressions */
        statusSpy.calledWith(500).should.be.true;
        /* eslint-enable no-unused-expressions */
      });

      it('sets json response', () => {
        const jsonSpy = sinon.spy(response, 'json');
        const expectedArg = {
          message: 'The system failed to write to the error log.',
        };
        errorHandlingConfigurer.logErrors(error, request, response, next);

        /* eslint-disable no-unused-expressions */
        jsonSpy.calledWith(expectedArg).should.be.true;
        /* eslint-enable no-unused-expressions */
      });
    });

    describe('if NOT log-related', () => {
      let logDetailStub;

      beforeEach(() => {
        logDetailStub = sinon.stub(logDetail, 'execute', () => Promise.resolve({}));
      });

      afterEach(() => {
        logDetail.execute.restore();
      });

      it('calls logDetail', () => {
        errorHandlingConfigurer.logErrors(error, request, response, next);
        logDetailStub.getCall(0).args.should.deep.equal([
          dummyUsernameToRemoveWhenAuthIsImplemented, 'error', error.message
        ]);
      });

      it('calls next with correct argument', () => {
        errorHandlingConfigurer.logErrors(error, request, response, next);
        actualArgPassedToNext.should.equal(error);
      });
    });
  });
});
