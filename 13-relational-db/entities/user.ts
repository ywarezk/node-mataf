/**
 * class User
 * which is going to map users table in our database
 * firstName
 * lastName
 */

import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Base } from './base';

@Entity()
export class User extends Base {
    @Column()
    firstName: string;

    @Column()
    lastName: string;
}