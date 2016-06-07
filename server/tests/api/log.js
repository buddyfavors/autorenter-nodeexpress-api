
'use strict';
var request = require('supertest');
var express = require('express');
var expect = require('chai').expect;
const models = require('../../models');


var app = express();


app.post('/api/log', function(req, res) {
   res.send({            'UserName': 'Devashri',            'Level':'Info',            'Message':'API Test case'        });
 
});

var postData = {
            
                'UserName': 'Devashri',        
                 'Level':'Info', 
                 'Message':'API Test case' 
           
        };

describe('api/log', function(){
   it('should add logs in table', function(done){
    request(app)
        .post('/api/log')
        .send(postData)  
        .expect(201,done);
  });
});

 
module.exports = app;