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
const oauthRoute = require('./routes/oauth2');
const auth = require('./routes/auth');
const config = require('./config');
const pageNotFound = require('./utils/pageNotFound');
const logRequests = require('./utils/logRequests');
const handleErrors = require('./utils/handleErrors');

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
app.use(logRequests());
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

// TODO: uncomment these once passport is configured
//app.use(passport.initalize());
//app.use(passport.session());

// TODO: secure me
app.use(cors());

app.use(routes);
app.post('/oauth/token', oauthRoute.token);
app.delete('/oauth/token', oauthRoute.deleteToken);
app.use('/auth', auth);

app.use(pageNotFound);
app.use(handleErrors);

module.exports = app;
