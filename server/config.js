const url = require('url');
let config = module.exports = {};
let redisConfig;

config.server = {
  host: process.env.HOST || '0.0.0.0',
  port: process.env.PORT || 3000,
  sessionKey: process.env.SESSION_KEY || 'aut-session-key',
  sessionCoookieName: process.env.SESSION_COOKIE || 'autsessionid',
  blacklist: ['password', 'passwordConfirmation']
};

config.postgres = {
  user: process.env.POSTGRES_USER || 'postgres',
  password: process.env.POSTGRES_PASSWORD || 'postgres',
  host: process.env.POSTGRES_HOST || '0.0.0.0',
  database: process.env.POSTGRES_DB || 'postgres'
};

config.redis = {
  host: 'localhost',
  port: 6379,
  options: {}
};

if (process.env.REDIS_URL) {
  redisConfig = url.parse(process.env.REDIS_URL);
  config.redis.port = redisConfig.port;
  config.redis.host = redisConfig.hostname;
  config.redis.options.auth_pass = redisConfig.auth.split(':')[1];
}
