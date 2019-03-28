var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var axios = require('axios');
const Models = require('./Models.js');

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));

app.get('/', (req, res) => {
    Models.retrieveAll(req, res);
})

app.get('/:id', (req, res) => {
    // grab the specific item in the req.body param
    // res.send the relevant dataset 

})



app.listen(3007, function() {
    console.log('listening on port 3007!');
});
