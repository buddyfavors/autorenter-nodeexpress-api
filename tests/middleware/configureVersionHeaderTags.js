'use strict';

const proxyquire = require('proxyquire');
const sinon = require('sinon');

describe('configureVersionHeaderTags', () => {
  let configureVersionHeaderTags;
  let inputs;
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    inputs = {
      environmentModel: {},
      app: {
        use: () => {}
      }
    };
    inputs.environmentMock = new Promise((resolve) => inputs.resolveEnvironmentPromise = resolve);
    configureVersionHeaderTags = proxyquire('../../server/middleware/configureVersionHeaderTags',
      {'../environment/environment': inputs.environmentMock});
  });

  afterEach(() => sandbox.restore());

  it('should call app.use with a function', () => {
    let useSpy = sandbox.spy(inputs.app, 'use');
    configureVersionHeaderTags(inputs.app);
    return useSpy.withArgs(sinon.match.function).should.have.been.called;
  });

  describe('app.use function argument', () => {
    let responseMiddlewareCall;
    let given;

    beforeEach(() => {
      given = {
        request: {},
        response: {
          setHeader: () => {}
        },
        next: () => {}
      };

      let useSpy = sandbox.spy(inputs.app, 'use');
      configureVersionHeaderTags(inputs.app);
      responseMiddlewareCall = useSpy.firstCall.args[0];
    });

    it('should not call next if environment has not been resolved', () => {
      let nextSpy = sandbox.spy(given, 'next');
      responseMiddlewareCall(given.request, given.response, given.next);
      return nextSpy.should.not.have.been.called;
    });

    it('should call the next argument passed from app when environment has been resolved', () => {
      let nextSpy = sandbox.spy(given, 'next');
      responseMiddlewareCall(given.request, given.response, given.next);
      inputs.resolveEnvironmentPromise({});
      return inputs.environmentMock.then(() => nextSpy.should.have.been.called);
    });

    it('should set api-version to the environment version', () => {
      let responseSpy = sandbox.spy(given.response, 'setHeader');
      let expectedVersion = 'some version';
      responseMiddlewareCall(given.request, given.response, given.next);
      inputs.resolveEnvironmentPromise({version: expectedVersion});

      return inputs.environmentMock
        .then(() => {
          return responseSpy.withArgs('api-version', expectedVersion).should.have.been.called;
        });
    });

    it('should set api-build-number to the environment build number', () => {
      let responseSpy = sandbox.spy(given.response, 'setHeader');
      let expectedBuildNumber = 'some buildNumber';
      responseMiddlewareCall(given.request, given.response, given.next);
      inputs.resolveEnvironmentPromise({buildNumber: expectedBuildNumber});

      return inputs.environmentMock
        .then(() => responseSpy.withArgs('api-build-number', expectedBuildNumber).should.have.been.called);
    });
  });
});
