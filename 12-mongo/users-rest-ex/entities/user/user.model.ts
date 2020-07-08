/**
 * we will create a model to interact with out collection
 * using the user schema we created
 */

import { User } from './user';
import { getModelForClass } from '@typegoose/typegoose';

export const UserModel = getModelForClass(User);