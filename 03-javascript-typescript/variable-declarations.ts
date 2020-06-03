// how we define variables in ts/js

// const, let, var
// const/let/var varName = someValue;

const myHello = 'world';
let myNumber;
myNumber = 10;
let myBoolean = true;
var myArray = [1,2,3];

if (true) {
    const thisIsValidInBlock = 'hello';
    // thisIsValidInBlock = 'world';
    const anotherArray = [];
    anotherArray.push(1);

    var thisIsAvailableOutsideBlock = true;
}
console.log(thisIsAvailableOutsideBlock);

function hello() {
    var thisIsAvailableInFunction = [];
} 



