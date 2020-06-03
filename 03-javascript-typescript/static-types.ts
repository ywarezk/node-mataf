// with typescript you can define the type 
// of the variables
// const/let/var: number/boolean/string = value

const myNumber1: number | string = '10';

// Array

const myStringArray: string[] = [];
myStringArray.push('hello');
// myStringArray.push(10);

const myStringNumberArray: Array<string | number> = [1, 'hello']

// Object {key: value}

const myObject: any = {
    'hello': 1,
    'world': true
};

myObject['foo'] = 'bar'; // {'hello': 1, 'world': true, 'foo': 'bar'}
console.log(myObject['hello']);

