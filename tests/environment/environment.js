'use strict';
const proxyquire = require('proxyquire');
const sinon = require('sinon');


describe('environment', () => {
  let inputs;
  let environment;
  let mocks;
  let sandbox;

  beforeEach((done) => {
    sandbox = sinon.sandbox.create();

    mocks = {
      app: {get: sandbox.stub()}
    };

    inputs = {
      express: () => inputs.app,
      app: mocks.app,
      environment: {id: 'correctEnvironment'},
      pkgJSON: {
        description: 'correctTitle',
        version: 'correctVersion'
      },
      gitData: {long: 'longGitVersion'},
      get gitDataPromise() {
        return Promise.resolve(inputs.gitData);
      }
    };

    mocks.app.get.returns(inputs.environment);

    proxyquire('../../server/environment/environment', {
      'express': inputs.express,
      '../../package.json': inputs.pkgJSON,
      './git-data': inputs.gitDataPromise
    }).then((environmentResults) => {
      environment = environmentResults;
      done();
    });
  });

  afterEach(() => sandbox.restore());

  it('should have the title from package.json', () => {
    environment.title.should.equal(inputs.pkgJSON.description);
  });

  it('should have property environment that matches the environment returned from express', () => {
    environment.environment.should.equal(inputs.environment);
  });

  it('should the version from package.json', () => {
    environment.version.should.equal(inputs.pkgJSON.version);
  });

  it('should have a property commit that matches the results from gitData', () => {
    environment.commit.should.equal(inputs.gitData);
  });

  it('should have a property build that matches gitData.long', () => {
    environment.build.should.equal(inputs.gitData.long);
  });
});

