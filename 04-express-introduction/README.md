## Express introduction - our first backend application.

our backend apps will run on a server
our apps will listen for request and return response
client ---> server - backend app
protocol http
http the server is passive
server returns data -> html, json, js, css, img
server -> johnbryce.com/about/hello
http is stateless

## How will we build our backend app

- we are going to get help from a framework called express.

express will help us solve common problems
with express we can use tons of community libraries.

## What is express.js

express.js if framework runs on Node.js
will help us build apps that will get http request and return http response

## hello world

to use express you have to install it using npm

```
npm init --yes
npm install typescript @types/node -D
npm install ts-node
npm install express
npm install @types/express -D
npx tsc --init
```

## REST

based on http protocol
communication protocol
based on the http request i get i need to return response in a certain way

based on the request method
we know what the user want to do:

GET - client wants to read data
POST - client wants to add data
PUT - client wants to update data
DELETE - client wants to delete data

path -/api/users
path - /api/todo

returns the response in a json format
each action has a proper status code

## Student EX.

- express installations
- create express application
- config the application to response to the following requests:
  - GET - /api/users/:id - single user - with status 200, 404 if user not found {error: 'user not found'}
  - DELETE - /api/users/:id -  deletes a user - status 204

- to create the delete request use postman: https://www.postman.com/




