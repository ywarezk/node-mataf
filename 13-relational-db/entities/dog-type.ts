/**
 * each dog can have many types
 * pigletshvily - German shepard + Knaani shepard
 * Sweetness - German shepard
 * 
 * many to many to the dogs table
 */

import { Base } from "./base";
import { Entity, Column, ManyToMany, JoinTable } from "typeorm";
import { Dog } from "./dog";

@Entity()
export class DogType extends Base {
    @Column()
    typeName: string;

    @ManyToMany(() => Dog)
    @JoinTable()
    dogs: Dog[];
}