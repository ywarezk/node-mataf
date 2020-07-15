/**
 * one-2-one
 * cat table
 * one cat belongs to one user
 */

import { BaseEntity, Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { Base } from './base';
import { User } from './user';

@Entity()
export class Cat extends Base {
    @Column()
    name: string;

    @Column({
        default: 10
    })
    lengthOfFingernails: number;

    @OneToOne(() => User)
    @JoinColumn()
    owner: User; // ownerId
}