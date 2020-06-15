// Error

// class that describes exception in our code

// const myError = new Error();
// myError.stack // what the stack looks like when there is an error
// myError.message // error description

// Exception

// throw new Error('hello');

// how do i catch the exception

// try {
//     throw new Error('something happened')
// } catch(err) {

// }

// what happens to the node process when an exception happens?

try {// no good
    setTimeout(() => {
        console.log('timer1');        
        try {
            throw new Error('something happened')
        } catch(err) {
            
        }
        
    }, 1000);
} catch(err) {

}


setTimeout(() => {
    console.log('timer2');
}, 2000);

// if we have an uncaught exception the node process terminates