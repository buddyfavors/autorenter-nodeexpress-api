'use strict';

const app = require('../../server/app');
const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');

let proxyquire = require('proxyquire');

chai.use(chaiHttp);
chai.should();

describe('(api root) /', () => {
  let rootCall;
  let input;
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.sandbox.create();

    input = {
      environmentData: {
        title: 'expectedTitle',
        environment: 'expectedEnvironment',
        version: 'expectedVersion',
        build: 'expectedBuild'
      },
      statusReturnMock: {
        json: sandbox.spy()
      },
      responseMock: {
        status: () => input.statusReturnMock
      }
    };
    input.responseSpy = sandbox.spy(input.responseMock, 'status');

    input.environmentPromise = Promise.resolve(input.environmentData);
    rootCall = proxyquire('../../server/routes/getRoot',
      {'../environment/environment': input.environmentPromise});
  });

  describe('getRoot', () => {
    let results;

    beforeEach(() => {
      rootCall( {}, input.responseMock);
      return input.environmentPromise.then(() => {
        results = input.statusReturnMock.json.firstCall.args[0];
      });
    });

    it('should call response.status with 200',
      () => input.responseSpy.firstCall.args[0].should.equal(200));

    describe('json call argument', () => {
      it('should should have a property title that matches the given environment title',
        () => results.title.should.equal(input.environmentData.title));

      it('should have a property "environment" that matches the given environments property "environment"',
        () => results.environment.should.equal(input.environmentData.environment));

      it('should have a property "version" that matches the given environments "version"',
        () => results.version.should.equal(input.environmentData.version));

      it('should have a property "build" that matches the given environments "build"',
        () => results.build.should.equal(input.environmentData.build));
    });
  });

  it('respond with json', () => {
    return chai
      .request(app)
      .get('/api/')
      .set('Accept', 'application/json')
      .then((res) => {
        const body = res.body;
        res.should.have.status(200);
        body.should.have.property('title');
        body.should.have.property('environment');
        body.should.have.property('version');
        body.should.have.property('build');
      })
      .catch((err) => {
        throw err;
      });
  });
});
