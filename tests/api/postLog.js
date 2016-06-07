'use strict';
const app = require('../../server/app');
const supertest = require('supertest')(app);

// TODO: Add another aspect of the test that after the API call, verify the entry in the log table exists
//const models = require('../../server/models');

let postData = {
  'username': 'Auto Renter',
  'level':'Info',
  'message':'API Test case'
};

describe('/api/log', function() {
  it('should return 201', function(done) {
    supertest
      .post('/api/log')
      .send(postData)
      .expect('Content-Type', /json/)
      .expect(201)
      .end(done);
  });
});
