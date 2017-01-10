'use strict';

const app = require('../../server/app');
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
chai.should();

describe('(api root) /', () => {
  it('respond with json', () => {
    return chai
      .request(app)
      .get('/api/')
      .set('Accept', 'application/json')
      .then((res) => {
        const body = res.body;
        res.should.have.status(200);
        body.should.have.property('title');
        body.title.should.equal('AutoRenter API');
        body.should.have.property('environment');
        body.environment.length.should.not.equal(0);
        body.should.have.property('version');
        body.version.length.should.not.equal(0);
      })
      .catch((err) => {
        throw err;
      });
  });
});
