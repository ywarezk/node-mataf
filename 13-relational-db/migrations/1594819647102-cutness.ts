import {MigrationInterface, QueryRunner} from "typeorm";

export class cutness1594819647102 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE dog ADD cutnessScale INTEGER`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
