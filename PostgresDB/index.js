const path = require('path');
const { Pool, Client } = require('pg');

const pool = new Pool({
  host: 'localhost',
  user: 'ian',
  database: 'neighborhoods',
  password: '1',
  port: 5432
});

pool
  .connect()
  .then(() => {
    console.log('Connected');
  })
  .catch(err => {
    console.log('Error with attempting to connect to the database: ', err);
  });
let loaders = [];

// for (let i = 1; i <= 10; i++) {
//   loaders.push(makeQuery(i));
// }
function makeQuery(num) {
  let generatedCSVPath = path.join(__dirname + `/neighborhoodData${num}.csv`);

  return pool
    .query(
      `COPY neighborhoods FROM '${generatedCSVPath}' DELIMITER ',' CSV HEADER;
    `
    )
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      console.log(err);
    });
}

let generatedCSVPath = path.join(__dirname + `/neighborhoodData${1}.csv`);

pool
  .query(
    `COPY neighborhoods FROM '${generatedCSVPath}' DELIMITER ',' CSV HEADER;
    `
  )
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  });

// Promise.all(loaders)
//   .then(() => {
//     pool.end();
//     console.log('Success');
//   })
//   .catch(err => {
//     console.log('There was an error with attempting to load the csvs: ', err);
//   });

//   CREATE TABLE neighborhoods(
//     id INT PRIMARY KEY     NOT NULL,
//     price           FLOAT  ,
//     beds            INT ,
//     baths        INT,
//     sqft         INT,
//     address     TEXT,
//     lat TEXT,
//     long TEXT
//  );
