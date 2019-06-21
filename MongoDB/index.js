const mongoose = require('mongoose');
mongoose
  .connect('mongodb://18.224.228.169/neighborhoods', {
    useNewUrlParser: true
  })
  .then(() => {
    console.log('Successful Mongoose Connection');
  })
  .catch(err => {
    console.log(err);
  });

var db = mongoose.connection;

let neighborhoodSchema = new mongoose.Schema({
  id: { type: Number, unique: true },
  price: Number,
  beds: Number,
  baths: Number,
  sqft: Number,
  address: String,
  lat: Number,
  long: Number
});

let Neighborhood = mongoose.model('Neighborhood', neighborhoodSchema);

module.exports.Neighborhood = Neighborhood;
module.exports.db = db;

// mongoimport --db neighborhoods --collection neighborhoods --type csv --headerline --file ./neighborhoodData3.csv
