## Typescript & Javascript

### What is Typescript

- Programming language
- Typescript comes with a compiler and compiles your ts
code to js
- *.ts => *.js => Node.js
- javascript is Dynamic language
- typescript turns javascript to Dynamic + Static
- typescript is SuperSet of Javascript
- Typescript is easy to learn especially if you know js
- One advantage is good intellisense
- Compilation helps identify problems
- Typescript allows you to use new javascript updates
that node.js still doesn't support

Before you can use typescript you have to install it first!

We install typescript with an installation tool
that is called NPM

### NPM

node package manager
we can install packages from the community using npm
npm is installed with node

### To work with Typescript:

1. open a folder for you project and open it with VSC
2. View -> Terminal
3. npm init --yes
4. npm install typescript -D
5. npm install @types/node -D
6. npm install -D ts-node
7. write the code
8. open launch.json add the object below to the configurations array

### Why do we need to npm init

for npm to do his work he will need information on the project
That information is in **package.json**

### Should I install typescript once for workstation

No

Add this to the launch.json
to run a file called: print-env.ts

```
    {
            "type": "node",
            "request": "launch",
            "name": "Launch Program",
            "skipFiles": [
                "<node_internals>/**"
            ],
            "program": "${workspaceFolder}/node_modules/.bin/ts-node",
            "args": [
                "print-env.ts"
            ],
            "outFiles": [
                "${workspaceFolder}/**/*.js"
            ],
            "sourceMaps": true
        }
```

### EX

iterate in for loop over the environment variables
print them
create the ex in a typescript
run the file with the debugger

### to run your files

```
npx ts-node <filename.ts>
```

### Variable declaration

const/let/var varName = someValue;

-----| scope        | number of assignments|

const    {}                 1
let      {}                infinite
var      functional        infinite

### Student EX.

- define variable will hold array numbers
- populate the array with numeric values
- Math.random()
- using a for loop populate the array with 10 random numbers
- sort the array and print the array values

### Running ts files with debugger

Add the following in the configurations array in the launch.json file:

```
{
    "type": "node",
    "request": "launch",
    "name": "Launch Program",
    "program": "${workspaceFolder}\\node_modules\\ts-node\\dist\\bin.js",
    "args": [
        "path-of-file-to-run.ts"
    ],
    "skipFiles": [
        "<node_internals>/**"
    ]
}
```

I posted the solution here as well:

https://stackoverflow.com/questions/44764004/ts-node-is-not-recognized-as-an-internal-or-external-command-operable-program/62259280#62259280