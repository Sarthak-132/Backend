NodeJS - not a library or nor framework it is a **runtime environment** for JavaScript.embedded - C++ and V8 Engine = Nodejs 
Nodejs has not access to window object and UI related things because node is created for web storage and server side rendering.

V8 Engine - A "V8 engine" in a browser refers to the JavaScript engine developed by Google, primarily used in the Chrome browser, which is responsible for interpreting and executing JavaScript code within the browser; it's known for its high performance and is considered one of the most advanced JavaScript engines available today.

npm init     // for initialize project     -     create package.json file

kind of configuaration file that contains all the details about project and their dependecies.
install dependencies, give package name, application name,  publish, code run then will do in this configuration. it can create manually but chances of error so try to create it using npm init.

{
  "name": "practices-piyush-garg",
  "version": "1.0.0",
  "main": "world.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
    "you" : "Hey, You!"   //added script manually
  },
  "author": "",
  "license": "ISC",
  "description": ""
}

npm run you 
output - Hey, You

Note : Use of this script we can give the things that needs to execute after this command.
