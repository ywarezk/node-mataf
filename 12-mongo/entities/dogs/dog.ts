/**
 * using typegoose
 * i will create a class
 * that will map a document from the dogs collection
 * to that class
 */

import { prop } from '@typegoose/typegoose';

export class Dog {
    @prop()
    name: string = '';
}