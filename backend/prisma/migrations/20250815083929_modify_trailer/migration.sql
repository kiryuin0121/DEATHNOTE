-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Trailer" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Trailer" ("id", "title", "url") SELECT "id", "title", "url" FROM "Trailer";
DROP TABLE "Trailer";
ALTER TABLE "new_Trailer" RENAME TO "Trailer";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
