
// let id = 108;
// console.log(id);
// console.log(id.toString());

// let score = new Number(64.166);  // to make sure it is a number
// console.log(score);
// console.log(score.toString());
// console.log(score.toString().length);

// ----

// console.log(score.toFixed(2)); // fixed value upto 2 digits after decimal

// console.log(score.toPrecision(3)); // takes only first 3 digits

// ----

// const hundreds = 1000000000;

// console.log(hundreds.toLocaleString()); // output: 1,000,000,000
// console.log(hundreds.toLocaleString('en-IN')); // output: 1,00,00,00,000

// ----


// console.log(Math);
// console.log(Math.PI);
// console.log(Math.round(34.16108));
// console.log(Math.ceil(34.16108));
// console.log(Math.floor(34.1664));

// console.log(Math.min(1, 2, 3, 4, 5));
// console.log(Math.max(1, 2, 3, 4, 5));

// ----

// console.log(Math.random());
// console.log(Math.random() + 1); // range: 1 - 2
// console.log((Math.random() * 10) + 1); // range: 1 - 10

// console.log(Math.floor((Math.random() * 10) + 1)); // range: 1 - 10
// console.log(Math.ceil((Math.random() * 10) + 1)); // range: 1 - 11

const min = 10;
const max = 20;

console.log(Math.floor((Math.random() * (max - min + 1)) + min)); // range: 10 - 20


