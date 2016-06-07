
'use strict';
var request = require('supertest');
var express = require('express');
var expect = require('chai').expect;
const models = require('../../models');


var app = express();

app.get('/', function(req, res) {

  res.status(200).json({});
  
});




  describe('/', function() {
  it('respond with json', function(done) {
    request(app)
      .get('/')
      .expect(200, done);
  });
});

module.exports = app;