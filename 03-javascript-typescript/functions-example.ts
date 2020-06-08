
function sayHello(message: string): number {
    console.log(message);
    return message.length;
}

sayHello('hello world');
// sayHello(10);

const namelessFunction = function() {

}

namelessFunction();

// lambda function / arrow function

const lambdaFunction = (arg1: number, arg2: number): void => {

} 

lambdaFunction(1, 10);

// (n1,n2)=> n2 - n1

(n1: number, n2: number): number => n2 - n1;

// n1 => 'hello'

// this

// this points to something

// console.log(this); // {}

function whatIsThis(this: any) {
    console.log(this); // undefined, a
}

// whatIsThis();

const a = {
    hello: whatIsThis
}

a['hello']();

// this is dynamic
// this is set by the object that calls the function

const lambdaWhatThis = () => {
    const that = this as any;
    console.log(that);
}


