/*
  Warnings:

  - You are about to drop the column `description` on the `Cast` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Cast" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "profile" TEXT,
    "comment" TEXT
);
INSERT INTO "new_Cast" ("comment", "id", "name") SELECT "comment", "id", "name" FROM "Cast";
DROP TABLE "Cast";
ALTER TABLE "new_Cast" RENAME TO "Cast";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
