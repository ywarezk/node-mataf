/**
 * we will take our schema
 * and create a model from that schema
 */

import { getModelForClass } from '@typegoose/typegoose';
import {Dog} from './dog';

export const DogModel = getModelForClass(Dog)