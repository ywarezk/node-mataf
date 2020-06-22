## Express Advanced

Solving repeating problems with express.

### repeating patterns in express for solving problems

solving problems in express tends in most cases to be the same

#### Middleware creator

```

function stamMiddlewareCreator(config) {
    return function(req, res, next) {
        ...
    }
}

app.get('/tasks', stamMiddlewareCreator())
```

#### Extending the request object

#### EX

- we are going to continue the users REST server
- https://github.com/ywarezk/node-mataf/tree/master/04-express-introduction/users-rest-ex
- add REST api for adding a new user
  - post /api/users in the body of the request the new  user {id: , first, lastName}
- add REST api for updating a new user
  - put /api/users/:id in the body fields to update {firstName}


### Writing tests

to write our tests we will use testing framework.
jest, jasmine, mocha

Installing mocha:

```
npm install mocha -D
npm install @types/mocha -D
```

to run the tests
in the launch.json
place the following object
in the configurations array

```
    {
        "args": [
            "-u",
            "bdd",
            "--timeout",
            "999999",
            "--colors",
            "-r",
            "ts-node/register",
            "${workspaceFolder}/tests/*.spec.ts"
        ],
        "internalConsoleOptions": "openOnSessionStart",
        "name": "Users rest tests",
        "program": "${workspaceFolder}/node_modules/mocha/bin/_mocha",
        "request": "launch",
        "skipFiles": [
            "<node_internals>/**"
        ],
        "type": "pwa-node"
    },
```

### EX.

- write tests for the get, put, delete
- install mocha, @types/mocha, axios
- beforeEach create a server
- afterEach destroy server
- create request
- assert
