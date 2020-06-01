## Node introduction

Node can run javascript

### Our first Node.js application

hello world

### Why use Node.js to build our server

- node can run on Windows, Mac, Linux
- Node.js open source very popular
- Node.js is very fast.
- Node.js is easy to learn.

### About Javascript

- dynamic language
- Non blocking 
- Event driven
- Single Threaded*

javascript is going to be filled async code
you will need to pass callback that will be called in the future

Single threaded it's simple to program
Single Threaded won't harm the performance 

https://medium.com/@mihaigeorge.c/web-rest-api-benchmark-on-a-real-life-application-ebb743a5d7a3

In most cases Node.js will deal with multi threading automatically for you


#### How Node.js is built

1. Stack will contain the js commands and will run them using V8
2. C++ API - thread pool, kernel
3. Event loop

Always prefer the async methods

#### Student EX.

- Install Node.js
- create a js file which will print all the environment variables
- process, process.env => { hello: 'world', foo: 'bar' }
- Your job is to print all the environment variables
- Run the js file with visual studio code debugger





