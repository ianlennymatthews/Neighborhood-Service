var express = require('express');
var bodyParser = require('body-parser');
var request = require('request')
var app = express();
var axios = require('axios');
const sqlDb = require('../db/sql');

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));

