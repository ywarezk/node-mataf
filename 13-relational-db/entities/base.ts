/**
 * all of our models have a common parent
 */

import { BaseEntity, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn } from "typeorm";


export class Base extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

}