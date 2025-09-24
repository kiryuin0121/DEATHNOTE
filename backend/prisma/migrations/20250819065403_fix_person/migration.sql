/*
  Warnings:

  - Added the required column `serial` to the `Person` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Person" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "size" TEXT NOT NULL,
    "top" INTEGER NOT NULL,
    "left" INTEGER NOT NULL,
    "serial" INTEGER NOT NULL,
    "characterId" TEXT NOT NULL,
    "castId" TEXT NOT NULL,
    CONSTRAINT "Person_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Person_castId_fkey" FOREIGN KEY ("castId") REFERENCES "Cast" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Person" ("castId", "characterId", "id", "left", "size", "top") SELECT "castId", "characterId", "id", "left", "size", "top" FROM "Person";
DROP TABLE "Person";
ALTER TABLE "new_Person" RENAME TO "Person";
CREATE UNIQUE INDEX "Person_characterId_key" ON "Person"("characterId");
CREATE UNIQUE INDEX "Person_castId_key" ON "Person"("castId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
