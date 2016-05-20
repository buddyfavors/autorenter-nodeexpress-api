'use strict';

const url = require('url');
let config = module.exports = {};
let redisConfig;

config.server = {
  host: process.env.HOST || '0.0.0.0',
  port: process.env.PORT || 3000
};

config.database = {
    "username": process.env.DATABASE_USER || 'auto_renter',
    "password": process.env.DATABASE_PASSWORD || 'auto_renter',
    "host": process.env.DATABASE_HOST || 'localhost',
    "database": process.env.DATABASE_DATABASE || 'auto_renter',
    "dialect": process.env.DATABASE_DIALECT || 'postgres',
    "logging": process.env.DATABASE_LOGGING === 'true'
    //"logging": console.log
}

//config.redis = {
//  host: 'localhost',
//  port: 6379,
//  options: {}
//};

//if (process.env.REDIS_URL) {
//  redisConfig = url.parse(process.env.REDIS_URL);
//  config.redis.port = redisConfig.port;
//  config.redis.host = redisConfig.hostname;
//  config.redis.options.auth_pass = redisConfig.auth.split(':')[1];
//}
