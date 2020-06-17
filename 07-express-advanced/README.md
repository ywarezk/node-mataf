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
