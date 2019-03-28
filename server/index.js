var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var axios = require('axios');
const db = require('../db/sql');

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));

// app.get('/api/items', (req, res) => {

// })

// .then()
// .catch( (err) => console.log(err))



app.listen(3000, function() {
    console.log('listening on port 3000!');
});
