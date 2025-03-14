const http = require("http");

const myServer = http.createServer((req, res) => {
  console.log("New request receive");
  res.end("Hello from server");
});

// to run the server we need port...... one server will run on one port only at a time
// for another server you need to use different port

myServer.listen(8000, () => console.log("Server is running on port 8000"));
