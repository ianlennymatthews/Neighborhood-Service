const sqlite3 = require('sqlite3').verbose();
const data = require('./rawData');

let db = new sqlite3.Database('/Users/andrewschuessler/Desktop/hackReactorProjects/frontEndCapstone/Neighborhood-Service/properties.db', (err) => {
    if (err) {
        console.log('error db', err);
    } else {
        console.log('connected to properties db!');
    }
});


db.serialize(function() {
   
    var stmt = db.prepare("INSERT INTO regoProperties VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
    for (var i = 0; i < data.length; i++) {
        stmt.run(data[i].price, data[i].beds, data[i].baths, data[i].sqft, data[i].address, data[i].latitude, data[i].longitude, data[i].uniqueId);
    }
    stmt.finalize();
   
});


db.close((err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Closed the database connection.');
});

