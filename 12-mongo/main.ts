/**
 * we will take our model
 * the model can communicate with the db
 * we will use the model to insert dogs
 * find dogs 
 * delete dogs 
 * etc.
 */

import { connect } from 'mongoose';
import { UserModel } from './entities/user/user.model';
import { DogModel } from './entities/dogs/dog.model';
// import { DogModel } from './entities/dogs/dog.model';

async function main() {
    const mongoose = await connect('mongodb://localhost:27017/mataf-dogs');

    // const piglet = new DogModel({
    //     name: 'Piglet'
    // });
    // await piglet.save();

    // await DogModel.insertMany([
    //     {name: 'Sweetness'},
    //     {name: 'Marshmellow'}
    // ]);

    // const dogs = await DogModel.find();

    // for (const dog of dogs) {
    //     console.log(dog.name);
    // }

    // const dog = new DogModel({
    //     name: 'Piglet',        
    // });
    // await dog.save();

    // const user = new UserModel({
    //     firstName: 'Yariv',
    //     dogs1: [
    //         dog
    //     ]
    //     // dogs: [
    //     //     {name: 'piglet'}
    //     // ]
    // });
    // await user.save();

    // const newDogs = await DogModel.insertMany([
    //     {name: 'Sweetness'},
    //     {name: 'Stanley'}
    // ]);

    // user.dogs1.push(...newDogs);
    // await user.save();


    const users = await UserModel.find({
        age: {
            $gt: 50
        }
    });

    mongoose.disconnect();
}

main();