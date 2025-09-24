-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Lyric" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "phrase" TEXT NOT NULL,
    "time" REAL NOT NULL,
    "songId" TEXT NOT NULL,
    CONSTRAINT "Lyric_songId_fkey" FOREIGN KEY ("songId") REFERENCES "Song" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Lyric" ("id", "phrase", "songId", "time") SELECT "id", "phrase", "songId", "time" FROM "Lyric";
DROP TABLE "Lyric";
ALTER TABLE "new_Lyric" RENAME TO "Lyric";
CREATE TABLE "new_Person" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "size" TEXT NOT NULL,
    "top" INTEGER NOT NULL,
    "left" INTEGER NOT NULL,
    "serial" INTEGER NOT NULL,
    "characterId" TEXT NOT NULL,
    "castId" TEXT NOT NULL,
    CONSTRAINT "Person_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Person_castId_fkey" FOREIGN KEY ("castId") REFERENCES "Cast" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Person" ("castId", "characterId", "id", "left", "serial", "size", "top") SELECT "castId", "characterId", "id", "left", "serial", "size", "top" FROM "Person";
DROP TABLE "Person";
ALTER TABLE "new_Person" RENAME TO "Person";
CREATE UNIQUE INDEX "Person_characterId_key" ON "Person"("characterId");
CREATE UNIQUE INDEX "Person_castId_key" ON "Person"("castId");
CREATE TABLE "new_Song" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "imgUrl" TEXT NOT NULL,
    "audioUrl" TEXT NOT NULL,
    "album" TEXT,
    "artistId" TEXT NOT NULL,
    "releasedAt" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Song_artistId_fkey" FOREIGN KEY ("artistId") REFERENCES "Artist" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Song" ("album", "artistId", "audioUrl", "createdAt", "id", "imgUrl", "releasedAt", "title") SELECT "album", "artistId", "audioUrl", "createdAt", "id", "imgUrl", "releasedAt", "title" FROM "Song";
DROP TABLE "Song";
ALTER TABLE "new_Song" RENAME TO "Song";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
