var express = require('express')
    http = require('http'),
    redis = require('redis');

var app = express();
var client = redis.createClient('6379', 'redis');

// This is just a stub to test the api and redis are working
app.get('/', function(req, res, next) {
  client.incr('counter', function(err, counter) {
    if(err) return next(err);
    res.send('This api has been hit ' + counter + ' times!');
  });
});

var port = process.env.PORT || 3000;

http.createServer(app).listen(process.env.PORT || 3000, function() {
  console.log('Listening on port ' + (process.env.PORT || 3000));
});
