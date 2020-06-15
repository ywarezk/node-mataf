## Errors and Exceptions

### Error

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error

### node on uncaught exception

node will terminate the process on uncaught exception.
We better use a tool that will revive the process:

https://expressjs.com/en/advanced/pm.html

### Student EX

- if id the user does not exist we will send to an error middleware we will create
- the error middleware should print 404