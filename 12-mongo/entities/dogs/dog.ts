/**
 * using typegoose
 * i will create a class
 * that will map a document from the dogs collection
 * to that class
 */

import { prop, Ref } from '@typegoose/typegoose';
// import { User } from '../user/user';

export class Dog {
    @prop()
    name: string = '';

    // @prop({
    //     ref: User
    // })
    // user: Ref<User>; // ObjectId
}