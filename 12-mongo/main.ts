/**
 * we will take our model
 * the model can communicate with the db
 * we will use the model to insert dogs
 * find dogs 
 * delete dogs 
 * etc.
 */

import { connect } from 'mongoose';
import { DogModel } from './entities/dogs/dog.model';

async function main() {
    const mongoose = await connect('mongodb://localhost:27017/mataf-dogs');

    const piglet = new DogModel({
        name: 'Piglet'
    });
    await piglet.save();

    await DogModel.insertMany([
        {name: 'Sweetness'},
        {name: 'Marshmellow'}
    ]);

    const dogs = await DogModel.find();

    for (const dog of dogs) {
        console.log(dog.name);
    }

    mongoose.disconnect();
}

main();