/*
  Warnings:

  - You are about to drop the column `text` on the `Lyric` table. All the data in the column will be lost.
  - Added the required column `phrase` to the `Lyric` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Lyric" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "phrase" TEXT NOT NULL,
    "time" REAL NOT NULL,
    "songId" TEXT NOT NULL,
    CONSTRAINT "Lyric_songId_fkey" FOREIGN KEY ("songId") REFERENCES "Song" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Lyric" ("id", "songId", "time") SELECT "id", "songId", "time" FROM "Lyric";
DROP TABLE "Lyric";
ALTER TABLE "new_Lyric" RENAME TO "Lyric";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
