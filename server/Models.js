const sqlite3 = require('sqlite3').verbose();


var retrieveAll = (req, res) => {
    let db = new sqlite3.Database(__dirname + '/../properties.db', (err) => {
    
        if (err) {
            console.log('error db', err);
        } else {
            db.all("SELECT * FROM regoProperties;", [], (err, rows) => {
                if (err) {
                    console.log(err);
                } else {
                    res.send(rows);
                }
            });
        }
    });    
}


module.exports.retrieveAll = retrieveAll;