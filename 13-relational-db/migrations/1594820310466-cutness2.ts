import {MigrationInterface, QueryRunner} from "typeorm";

export class cutness21594820310466 implements MigrationInterface {
    name = 'cutness21594820310466'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "temporary_dog" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "name" varchar NOT NULL, "age" integer NOT NULL, "ownerId" integer, "cutnessScale" integer, "cutnessScale1" integer, CONSTRAINT "FK_2cd931b431fa086ee81e43ec5da" FOREIGN KEY ("ownerId") REFERENCES "user" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_dog"("id", "createdAt", "updatedAt", "name", "age", "ownerId", "cutnessScale") SELECT "id", "createdAt", "updatedAt", "name", "age", "ownerId", "cutnessScale" FROM "dog"`);
        await queryRunner.query(`DROP TABLE "dog"`);
        await queryRunner.query(`ALTER TABLE "temporary_dog" RENAME TO "dog"`);
        await queryRunner.query(`CREATE INDEX "IDX_9c5f15974e4cabe4b423370775" ON "dog" ("name") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "IDX_9c5f15974e4cabe4b423370775"`);
        await queryRunner.query(`ALTER TABLE "dog" RENAME TO "temporary_dog"`);
        await queryRunner.query(`CREATE TABLE "dog" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "name" varchar NOT NULL, "age" integer NOT NULL, "ownerId" integer, "cutnessScale" integer, CONSTRAINT "FK_2cd931b431fa086ee81e43ec5da" FOREIGN KEY ("ownerId") REFERENCES "user" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "dog"("id", "createdAt", "updatedAt", "name", "age", "ownerId", "cutnessScale") SELECT "id", "createdAt", "updatedAt", "name", "age", "ownerId", "cutnessScale" FROM "temporary_dog"`);
        await queryRunner.query(`DROP TABLE "temporary_dog"`);
    }

}
