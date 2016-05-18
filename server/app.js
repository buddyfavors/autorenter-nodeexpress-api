'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/index');
const cors = require('cors');

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// TODO: secure me
app.use(cors());

app.use(routes);

module.exports = app;
 