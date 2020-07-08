/**
 * schema of a single row in the users table
 * 
 */

import { prop, Ref } from '@typegoose/typegoose'
import { Dog } from '../dogs/dog';

// 1. embedded

/*
{
    firstName: 'Yariv',
    dogs: [
        {
            name: 'Piglet'            
        },
        {
            name: 'Sweetness'            
        }
    ]
}

*/

// 2. two collections users dogs
// ref between users and dogs

/*
{
    firstName: 'Yariv',
    dogs: [
        ObjectId(...),
        ObjectId(...),
        ObjectId(...),
    ]
}

{
    name: 'Piglet',
    age: 7
    user: ObjectId('...')
}

*/

// 3. combination to ref and embedded

/**
 
{
    firstName ...
    dogs: [
        {name: 'Piglet', _id: ObjectId('....')}
    ]
}
 

 */

class EmbeddedDogs {
    @prop()
    name: string;

    @prop({
        ref: Dog
    })
    dog: Ref<Dog>;
}

export class User {
    @prop({
        index: true,
        unique: true
    })
    firstName: string;

    // @prop({
    //     type: Dog
    // })
    // dogs: Dog[];

    // @prop({
    //     ref: Dog
    // })
    // dogs1: Ref<Dog>[];

    // lastName: string;

    @prop({
        type: EmbeddedDogs
    })
    dogs2: EmbeddedDogs[];

    @prop()
    age: number;
}