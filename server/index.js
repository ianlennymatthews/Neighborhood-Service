var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var axios = require('axios');
const Models = require('./Models.js');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/../client/dist'));

app.get('/items', (req, res) => {
    Models.retrieveAll(req, res);
})

app.get('/items/:id', (req, res) => {
    Models.retrieveOne(req, res);
})


app.listen(3007, function() {
    console.log('listening on port 3007!');
});