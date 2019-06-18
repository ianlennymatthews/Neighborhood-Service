const fs = require('fs');
const faker = require('faker');
const async = require('async');
require('events').EventEmitter.prototype._maxListeners = 100;

// Fast-CSV Module Functions
const fastcsv = require('fast-csv');
const csvStream = fastcsv.createWriteStream({ headers: true });
// const writeableStream = fs.createWriteStream('neighborhoodData.csv');

// csvStream.pipe(writeableStream);

console.log('Starting seed...');
console.time('Seeding');

const generate1 = () => {
  const arr1 = [];
  for (let i = 0; i < 1000000; i++) {
    let data = {
      id: i,
      price: faker.commerce.price(),
      beds: Math.floor(Math.random() * 4 + 1),
      baths: Math.floor(Math.random() * 4 + 1),
      sqft: faker.random.number(1000),
      address: faker.address.streetAddress(),
      lat: faker.address.latitude(),
      long: faker.address.longitude()
    };
    arr1.push(data);
  }
  return arr1;
};

let data1 = generate1();
let ws1 = fs.createWriteStream(`neighborhoodData1.csv`);
fastcsv
  .write(data1, {
    headers: true
  })
  .pipe(ws1);
///
const generate2 = () => {
  const arr2 = [];
  for (let i = 1000000; i < 2000000; i++) {
    let data = {
      id: i,
      price: faker.commerce.price(),
      beds: Math.floor(Math.random() * 4 + 1),
      baths: Math.floor(Math.random() * 4 + 1),
      sqft: faker.random.number(1000),
      address: faker.address.streetAddress(),
      lat: faker.address.latitude(),
      long: faker.address.longitude()
    };
    arr2.push(data);
  }
  return arr2;
};

let data2 = generate2();
let ws2 = fs.createWriteStream(`neighborhoodData2.csv`);
fastcsv
  .write(data2, {
    headers: true
  })
  .pipe(ws2);

///
const generate3 = () => {
  const arr3 = [];
  for (let i = 2000000; i < 3000000; i++) {
    let data = {
      id: i,
      price: faker.commerce.price(),
      beds: Math.floor(Math.random() * 4 + 1),
      baths: Math.floor(Math.random() * 4 + 1),
      sqft: faker.random.number(1000),
      address: faker.address.streetAddress(),
      lat: faker.address.latitude(),
      long: faker.address.longitude()
    };
    arr3.push(data);
  }
  return arr3;
};

let data3 = generate3();
let ws3 = fs.createWriteStream(`neighborhoodData3.csv`);
fastcsv
  .write(data3, {
    headers: true
  })
  .pipe(ws3);
///
const generate4 = () => {
  const arr4 = [];
  for (let i = 3000000; i < 4000000; i++) {
    let data = {
      id: i,
      price: faker.commerce.price(),
      beds: Math.floor(Math.random() * 4 + 1),
      baths: Math.floor(Math.random() * 4 + 1),
      sqft: faker.random.number(1000),
      address: faker.address.streetAddress(),
      lat: faker.address.latitude(),
      long: faker.address.longitude()
    };
    arr4.push(data);
  }
  return arr4;
};

let data4 = generate4();
let ws4 = fs.createWriteStream(`neighborhoodData4.csv`);
fastcsv
  .write(data4, {
    headers: true
  })
  .pipe(ws4);
///
const generate5 = () => {
  const arr5 = [];
  for (let i = 4000000; i < 5000000; i++) {
    let data = {
      id: i,
      price: faker.commerce.price(),
      beds: Math.floor(Math.random() * 4 + 1),
      baths: Math.floor(Math.random() * 4 + 1),
      sqft: faker.random.number(1000),
      address: faker.address.streetAddress(),
      lat: faker.address.latitude(),
      long: faker.address.longitude()
    };
    arr5.push(data);
  }
  return arr5;
};

let data5 = generate5();
let ws5 = fs.createWriteStream(`neighborhoodData5.csv`);
fastcsv
  .write(data5, {
    headers: true
  })
  .pipe(ws5);
///

const generate6 = () => {
  const arr6 = [];
  for (let i = 5000000; i < 6000000; i++) {
    let data = {
      id: i,
      price: faker.commerce.price(),
      beds: Math.floor(Math.random() * 4 + 1),
      baths: Math.floor(Math.random() * 4 + 1),
      sqft: faker.random.number(1000),
      address: faker.address.streetAddress(),
      lat: faker.address.latitude(),
      long: faker.address.longitude()
    };
    arr6.push(data);
  }
  return arr6;
};

let data6 = generate6();
let ws6 = fs.createWriteStream(`neighborhoodData6.csv`);
fastcsv
  .write(data6, {
    headers: true
  })
  .pipe(ws6);
///

const generate7 = () => {
  const arr7 = [];
  for (let i = 6000000; i < 7000000; i++) {
    let data = {
      id: i,
      price: faker.commerce.price(),
      beds: Math.floor(Math.random() * 4 + 1),
      baths: Math.floor(Math.random() * 4 + 1),
      sqft: faker.random.number(1000),
      address: faker.address.streetAddress(),
      lat: faker.address.latitude(),
      long: faker.address.longitude()
    };
    arr7.push(data);
  }
  return arr7;
};

let data7 = generate7();
let ws7 = fs.createWriteStream(`neighborhoodData7.csv`);
fastcsv
  .write(data7, {
    headers: true
  })
  .pipe(ws7);
///

const generate8 = () => {
  const arr8 = [];
  for (let i = 7000000; i < 8000000; i++) {
    let data = {
      id: i,
      price: faker.commerce.price(),
      beds: Math.floor(Math.random() * 4 + 1),
      baths: Math.floor(Math.random() * 4 + 1),
      sqft: faker.random.number(1000),
      address: faker.address.streetAddress(),
      lat: faker.address.latitude(),
      long: faker.address.longitude()
    };
    arr8.push(data);
  }
  return arr8;
};

let data8 = generate8();
let ws8 = fs.createWriteStream(`neighborhoodData8.csv`);
fastcsv
  .write(data8, {
    headers: true
  })
  .pipe(ws8);
///

const generate9 = () => {
  const arr9 = [];
  for (let i = 8000000; i < 9000000; i++) {
    let data = {
      id: i,
      price: faker.commerce.price(),
      beds: Math.floor(Math.random() * 4 + 1),
      baths: Math.floor(Math.random() * 4 + 1),
      sqft: faker.random.number(1000),
      address: faker.address.streetAddress(),
      lat: faker.address.latitude(),
      long: faker.address.longitude()
    };
    arr9.push(data);
  }
  return arr9;
};

let data9 = generate9();
let ws9 = fs.createWriteStream(`neighborhoodData9.csv`);
fastcsv
  .write(data9, {
    headers: true
  })
  .pipe(ws9);
///

const generate10 = () => {
  const arr10 = [];
  for (let i = 9000000; i < 10000000; i++) {
    let data = {
      id: i,
      price: faker.commerce.price(),
      beds: Math.floor(Math.random() * 4 + 1),
      baths: Math.floor(Math.random() * 4 + 1),
      sqft: faker.random.number(1000),
      address: faker.address.streetAddress(),
      lat: faker.address.latitude(),
      long: faker.address.longitude()
    };
    arr10.push(data);
  }
  return arr10;
};

let data10 = generate10();
let ws10 = fs.createWriteStream(`neighborhoodData10.csv`);
fastcsv
  .write(data10, {
    headers: true
  })
  .pipe(ws10);
///

Promise.all([
  generate1,
  generate2,
  generate3,
  generate4,
  generate5,
  generate6,
  generate7,
  generate8,
  generate9,
  generate10
]).then(() => {
  console.timeEnd('Seeding');
});
// function write(i, cb) {
//   let price = faker.commerce.price();
//   let beds = Math.floor(Math.random() * 4 + 1);
//   let baths = Math.floor(Math.random() * 4 + 1);generate3,
//   let sqft = faker.random.number(1000);
//   let address = faker.address.streetAddress();
//   let lat = faker.address.latitude();
//   let long = faker.address.longitude();
//   console.log(i);
//   csvStream.write({
//     id: i,
//     price: price,
//     beds: beds,
//     baths: baths,
//     sqft: sqft,
//     address: address,
//     lat: lat,
//     long: long
//   });

// async.whilst(
//   callback => {
//     return callback(null, counter < 10000000);
//   },
//   callback => {
//     insert(() => {
//       counter += 1;
//       callback(null, counter);
//       if (counter === 10000000) {
//         console.timeEnd('Seeding');
//         console.log('Seed complete!');
//       }
//     });
//   },
//   err => {
//     if (err) {
//       console.log(err);
//     }
//   }
// );

// let i = 1;
// writeaMil(i, () => {
//   setTimeout(function() {
//     writeaMil(i + 1);
//   }, 0);
// });

// function writeaMil(number, cb) {
//   let num = number + '';
//   let n = number + 1;
//   let next = n + '';
//   let mil = '000000';
//   let currentMil = parseInt(num + mil, 10);
//   let nextMil = parseInt(next + mil, 10);

//   for (let i = currentMil; i <= nextMil; i++) {
//     setTimeout(function() {
//       console.log(i);
//       write(i, cb);
//     }, 0);
//     // write(i);
//   }
//   // setTimeout(function() {
//   //   if (number <= 2) {
//   //     writeaMil(number + 1);
//   //   }
//   // }, 0);
// }

//   if (i % 1000000 === 0 && i !== 1000000) {
//     cb();
//   }
//   if (i === 3000000) {
//     // writeableStream.on('finish', () => {
//     //   console.log('Done!');
//     //   console.timeEnd('Timer');
//     // });
//     csvStream.end();
//     console.log('Done');
//   }
// }

// for (let i = 1; i <= 5; i++) {
//   setTimeout(function() {
//     writeaMil(i);
//   }, 0);
// }

// writeaMil(1);
// setTimeout(function() {
//   writeaMil(1);
// }, 0);

// function writeaMil(number) {
//   console.log(number);
//   let num = number + '';
//   let n = number + 1;
//   let next = n + '';
//   let mil = '000000';
//   let currentMil = parseInt(num + mil, 10);
//   let nextMil = parseInt(next + mil, 10);

//   for (let i = currentMil; i <= nextMil; i++) {
//     setTimeout(function() {
//       console.log(i);
//       write(i);
//     }, 0);
//     // write(i);
//   }
//   setTimeout(function() {
//     if (number <= 2) {
//       writeaMil(number + 1);
//     }
//   }, 0);
// }

// csvStream.pipe(writeableStream);
// for (let i = 0; i <= 1000000; i++) {
//   setTimeout(function() {
//     if (i === 1000000) {
//       console.log(1);
//     }
//     write(i);
//   }, 0);
// }

// setTimeout(function() {}, 0);

// for (let i = 1000001; i <= 2000000; i++) {
//   setTimeout(function() {
//     if (i % 2000000 === 0) {
//       console.log(2);
//     }
//     write(i);
//   }, 0);
// }

// setTimeout(function() {}, 0);

// for (let i = 2000001; i <= 3000000; i++) {
//   setTimeout(function() {
//     if (i % 3000000 === 0) {
//       console.log(3);
//     }
//     write(i);
//   }, 0);
// }

// setTimeout(function() {}, 0);

// for (let i = 3000001; i <= 4000000; i++) {
//   setTimeout(function() {
//     console.log(i);
//     if (i % 4000000 === 0) {
//       console.log(4);
//     }
//     write(i);
//   }, 0);
// }
