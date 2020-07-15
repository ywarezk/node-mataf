/**
 * dog
 * name
 * age
 * 
 * dog is connected to a user
 * one user can have many dogs
 * one-2-many
 */

import { Base } from "./base";
import { Entity, Column, ManyToOne, ManyToMany, Index } from "typeorm";
import {Length, Min, Max} from 'class-validator';
import { User } from "./user";
import { DogType } from "./dog-type";

@Entity()
export class Dog extends Base {
    @Column({
        nullable: false,        
    })
    @Length(0, 20)
    @Index()
    name: string;

    @Column()
    @Min(0)
    @Max(20)
    age: number

    @ManyToOne(() => User)
    owner: User;

    @ManyToMany(() => DogType)
    types: DogType[];

    @Column({
        nullable: true
    })
    cutnessScale: number;

    @Column({
        nullable: true
    })
    cutnessScale1: number;
}