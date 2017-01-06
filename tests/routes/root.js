'use strict';

const app = require('../../server/app');
const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');

let rewire = require('rewire');

chai.use(chaiHttp);
chai.should();

describe('(api root) /', () => {
  let rootCall;
  let input;

  beforeEach(() => {
    input = {
      environmentData: {
        title: 'expectedTitle',
        environment: 'expectedEnvironment',
        version: 'expectedVersion',
        build: 'expectedBuild'
      }
    };
    input.environmentPromise = Promise.resolve(input.environmentData);
    rootCall = rewire('../../server/routes/getRoot',
      {'../enviornment/enviornment': input.environmentPromise});
  });

  it('should match given environment data', () => {
    let statusReturnMock = {
      json: sinon.spy()
    };
    let mockResponse = {
      status: sinon.stub()
    };

    mockResponse.status.returns(statusReturnMock);

    rootCall(undefined, mockResponse);

    statusReturnMock.json.calledWithMatch(input.environmentData);
  });

  it('respond with json', () => {
    chai
      .request(app)
      .get('/api/')
      .set('Accept', 'application/json')
      .end((err, res) => {
        const body = res.body;
        res.should.have.status(200);
        body.should.have.property('title');
        body.should.have.property('environment');
        body.should.have.property('version');
        body.should.have.property('build');
      });
  });
});
