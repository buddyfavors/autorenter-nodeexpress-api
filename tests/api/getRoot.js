'use strict';
const app = require('../../server/app');
const supertest = require('supertest')(app);

describe('(api root) /', function() {
  it('respond with json', function(done) {
    supertest
      .get('/')
      .expect(200)
      .expect('{"user":"newton","title":"AutoRenter API","environment":"development","version":"0.0.1"}')
      .end(done);
  });
});
