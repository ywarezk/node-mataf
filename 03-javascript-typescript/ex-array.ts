import {reverse} from 'lodash';



const arrayOfNumbers: number[] = [];

for (let i=0; i<10; i++) {
    const randomNumber = Math.random();
    arrayOfNumbers.push(
        randomNumber
    )
}

arrayOfNumbers.sort();

console.log(reverse(arrayOfNumbers));

// QA sort in decending order
/*
numsArray.sort((n1,n2)=> n2 - n1);
*/

console.log(arrayOfNumbers);