'use strict';

const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const compression = require('compression');
const methodOverride = require('method-override');
const passport = require('passport');
const cors = require('cors');
const expressValidator = require('express-validator');
const expressSession = require('express-session');
const routes = require('./routes/index');
const config = require('./config');

let app = express();
let environment = app.get('env');

let sessionCookieName = config.server.sessionCookieName;
if (environment != 'production') {
  sessionCookieName += '_' + environment;
}

app.use(helmet.hidePoweredBy());
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(expressValidator());
app.use(methodOverride());

app.use(expressSession({
  resave: false,
  saveUninitialized: true,
  cookie: {maxAge: 360000, secure: false},
  name: sessionCookieName,
  secret: config.server.sessionKey,
  rolling: true
}));

// TODO: secure me
app.use(cors());

app.use(routes);

module.exports = app;
