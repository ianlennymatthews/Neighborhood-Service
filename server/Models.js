//const sqlite3 = require('sqlite3').verbose();
const Neighborhoods = require('../MongoDB/index.js');

var retrieveAll = (req, res) => {
  Neighborhoods.find({}, 'id', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send(data);
    }
  });
  // let db = new sqlite3.Database(__dirname + '/../properties.db', (err) => {
  //     if (err) {
  //         console.log('error db', err);
  //     } else {
  //         db.all("SELECT * FROM regoProperties;", [], (err, rows) => {
  //             if (err) {
  //                 console.log(err);
  //             } else {
  //                 res.send(rows);
  //             }
  //         });
  //     }
  // });
};

var retrieveOne = (req, res) => {
  Neighborhoods.findOne({ id: req.params.id }, (err, data) => {
    if (err) {
      console.log('error in db query: ', err);
    } else {
      res.send(data);
    }
  });
  // let db = new sqlite3.Database(__dirname + '/../properties.db', (err) => {
  //     if (err) {
  //         console.log('error db', err);
  //     } else {
  //         db.all("SELECT * FROM regoProperties WHERE uniqueId = " + req.params.id, [], (err, property) => {
  //             if (err) {
  //                 console.log(err);
  //             } else {
  //                 res.send(property);
  //             }
  //         })
  //     }
  // })
};

module.exports.retrieveAll = retrieveAll;
module.exports.retrieveOne = retrieveOne;
