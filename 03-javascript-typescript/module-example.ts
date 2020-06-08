// modules

// what is modules
// module is a file
// what is exposed from our file
// module in javascript is refered to what is exposed from a file

// how to expose stuff from a file
// how to import those stuff

export function sayHello() {
    console.log('hello world');
}

export const myArray = [1,2,3,4,5];

const myObjectToExpose = {
    'hello': 'world'
}

export default myObjectToExpose;
