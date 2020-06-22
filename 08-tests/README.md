## Writing tests

We are using mocha to write our unit test and integration tests.

### What is mocha

Mocha is a testing framework that we can use to write and run tests.
When we run a file with mocha, mocha will create functions we can use
to write our tests.

### Install mocha

Installing mocha is done with NPM:

```
npm install mocha @types/mocha -D
```

### Writing test with mocha

use **describe** to create a group of tests
use the hooks to prepare and clean the tests:
  - beforeEach
  - before
  - afterEach
  - after
use **it** to write the test

### Running our tests

place the following in **launch.json** to run the tests

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
    }
```

### Some of my opinions about tests

- Run the tests automatically
- unit test, integration tests have a longer life span than e2e
- writing tests get easier, but it's something you will have to practice.
- tests should be sandboxed, one test cannot effect the other one
