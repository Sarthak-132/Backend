const fs = require("fs");

// Note => here ASYN it does not return anything (value) it expect that you will return any callback function
// and give error or result while SYNC return the value. they both override the values so use append when want
// to keep the previous value as it is and add on next value to it.

// // Sync...........
fs.writeFileSync("./test.txt", "hello world sync"); // create file test.file with hello world

// // Async..........
fs.writeFile("./tests.txt", "hello world Async", (err) => {
  console.log(err);
});

// const result = fs.readFileSync("./contact.txt", "utf-8");
// console.log(result);

fs.readFile("./contacts.txt", "utf-8", (error, result) => {
  if (error) {
    console.log(error);
  } else {
    console.log(result);
  }
});

fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString());
