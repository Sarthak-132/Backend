const math = require("./math"); // it will find this in current directory

console.log(math);

const { a, b } = require("./math");

console.log(a, b);

// console.log("Value is :", math(3, 4)); // module.exports = add; only work for it

console.log("value", math.sub(3, 4)); // module.exports = { add, sub };

// ---> console.log(math); provide function {} but not execute anything

// console.log("Value is :", math(3, 4)); so give  module.exports in math.js file so value is : [funtion: add]

// const math = require ("buffer");        // It will find this package in install dependencies or build in pckages

// console.log("I am here");
