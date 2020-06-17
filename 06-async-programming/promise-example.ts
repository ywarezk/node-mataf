// Promise
// class ... new Promise()
// wraps async code
// by wrapping your async code with promise
// you get one api for dealing with the async

import {promises} from 'fs'

// create promise that will be resolved after 1 sec
const timerPromise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('hello world');

        // resolve('foo bar');

        reject(new Error('something happened'))
    }, 1000);
});

// promise can be in one of the following states:
// - pending
// - resolved / rejected
timerPromise.then(
    (msg: string) => {
        console.log(msg);
    },
    (err) => {
        console.log(err.message)
    }
)

// async - await

/**
 * @returns {Promise<number>}
 */
async function sayHello() {
    try {
        const hello = await timerPromise;
        const fileContent = await promises.readFile('README.md');
    } catch(err) {
        
    }
    
    return 10;
}

/**
  
  try {
    setTimeout(() => {
        readFile('README.md', () => {

        })
    }, 1000) 
  } catch(err) {

  }
  
 
 */

const asyncExample: Promise<number> = sayHello();

asyncExample.then((ten: number) => {

})


