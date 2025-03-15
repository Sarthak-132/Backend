// Basic things to run the server

// const http = require("http");

// const myServer = http.createServer((req, res) => {
//   // console.log("New request received");
//   // console.log(req.headers);
//   console.log(req);
//   res.end("Hello from server Again");
// });

// // to run the server we need port...... one server will run on one port only at a time
// // for another server you need to use different port

// myServer.listen(8000, () => console.log("Server is running on port 8000"));

// little bit features in server

const http = require("http");
const fs = require("fs");
const url = require("url");

function myHandler(req, res) {
  if (req.url === "/favicon.ico") {
    return res.end();
  }
  const log = `${Date.now()}: ${req.method} ${req.url} new request received\n`;
  const myUrl = url.parse(req.url, true);
  fs.appendFile("server.log", log, (err, data) => {
    switch (myUrl.pathname) {
      case "/":
        if (req.method === "GET") {
          res.end("Home Page");
          break;
        }
      case "/about":
        res.end("About Page");
        break;
      case "/contact":
        const username = myUrl.query.name; // in object it show name key
        res.end(`Contact Page , Hey ${username}`);
        break;
      case "/signup":
        if (req.method === "GET") res.end("Signup Form");
        else if (req.method === "POST") {
          // DB query
          res.end("Signup Success");
        }
      default:
        res.end("404 Page not found");
    }
  });
}

const myServer = http.createServer(myHandler);

myServer.listen(8000, () => console.log("server started on port 8000"));

// const http = require("http");
// const fs = require("fs");
// const url = require("url");

// const express = require("express");
// const app = express();

// const myServer = http.createServer(app);

// myServer.listen(8000, () => console.log("server started on port 8000"));
