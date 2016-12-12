'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');

const app = require('../../server/app');

chai.use(chaiHttp);
chai.should();

describe('routes/raise-error', () => {
  beforeEach(() => {
    sinon.stub(console, 'error');
  });

  it('should return correct response', () => {
    const expectedMessage = 'Error: An API-originated error for testing purposes.';
    return chai
      .request(app)
      .get('/api/raise-error')
      .set('Accept', 'application/json')
      .then((res) => { throw res; })
      .catch((err) => {
        const actualMessage = err.response.error.text.substring(0, expectedMessage.length);
        err.response.should.have.status(500);
        actualMessage.should.equal(expectedMessage);
      });
  });

  afterEach(() => {
    console.error.restore(); // eslint-disable-line no-console
  });
});
