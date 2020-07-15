/**
 * In this file we will use the User model to interact with our database
 */

import { User } from './entities/user';
import { createConnection } from 'typeorm';
import { Cat } from './entities/cat';
import { Dog } from './entities/dog';
import {validate, ValidationError} from "class-validator";
import { DogType } from './entities/dog-type';


async function main() {
    const connection = await createConnection({
        database: './db.sqlite',
        type: 'sqlite',
        entities: [
            'entities/*.ts'
        ],
        // dropSchema: true,
        // synchronize: true
    });

    const me = new User();
    me.firstName = 'Yariv';
    me.lastName = 'Katz';
    await me.save();

    const bonnie = new Cat();
    bonnie.name = 'Bonnie';
    bonnie.lengthOfFingernails = 2;
    bonnie.owner = me;
    await bonnie.save();

    const piglet = new Dog();
    piglet.name = 'Pigletshvily Chaitovski';
    piglet.age = 7;
    piglet.owner = me;
    await piglet.save();

    const sweetness = new Dog();
    sweetness.name = 'Sweetness fluffy belly';
    sweetness.age = 3;
    sweetness.owner = me;
    await sweetness.save();

    const germanShepard = new DogType();
    germanShepard.typeName = 'German Shepard';
    germanShepard.dogs = [piglet, sweetness];
    await germanShepard.save();

    const knaani = new DogType();
    knaani.typeName = 'knaani';
    knaani.dogs = [piglet];
    await knaani.save();

    // const users = await User.find({
    //     where: {
    //         firstName: 'Yariv'
    //     }
    // })

    connection.close();
}

main();

