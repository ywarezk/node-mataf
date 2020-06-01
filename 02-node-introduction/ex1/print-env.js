// print the environment variables

// process.env {hello: 'world', foo: 'bar'}

const keysArray = Object.keys(process.env); // ['hello', 'foo']

for (const item of keysArray ) {
    console.log(item);
    console.log(process.env[item]);
}