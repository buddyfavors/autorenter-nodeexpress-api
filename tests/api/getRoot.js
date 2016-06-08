'use strict';
const expect = require('chai').expect;
const app = require('../../server/app');
const supertest = require('supertest')(app);

describe('(api root) /', function() {
  it('respond with json', function(done) {
    supertest
      .get('/')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function(err, res) {
        expect(res.body).to.have.property('user');
        expect(res.body.user).to.not.equal(null);
        expect(res.body).to.have.property('title');
        expect(res.body.title).to.not.equal(null);
        expect(res.body).to.have.property('environment');
        expect(res.body.environment).to.not.equal(null);
        expect(res.body).to.have.property('version');
        expect(res.body.version).to.not.equal(null);
        done();
      });
  });
});
