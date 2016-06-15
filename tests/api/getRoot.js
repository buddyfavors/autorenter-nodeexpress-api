'use strict';
const app = require('../../server/app');
const chai = require('chai');
const expect = require('chai').expect;
const chaiHttp = require('chai-http');

describe('(api root) /', () => {
  chai.use(chaiHttp);
  it('respond with json', () => {
    chai
      .request(app)
      .get('/')
      .set('Accept', 'application/json')
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('user');
        expect(res.body.user).to.not.equal(null);
        expect(res.body).to.have.property('title');
        expect(res.body.title).to.not.equal(null);
        expect(res.body).to.have.property('environment');
        expect(res.body.environment).to.not.equal(null);
        expect(res.body).to.have.property('version');
        expect(res.body.version).to.not.equal(null);
      })
      .catch((err) => {
        throw err;
      });
  });
});
