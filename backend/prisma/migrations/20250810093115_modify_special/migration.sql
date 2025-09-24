-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_SpecialImage" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "url" TEXT NOT NULL,
    "specialId" TEXT NOT NULL,
    CONSTRAINT "SpecialImage_specialId_fkey" FOREIGN KEY ("specialId") REFERENCES "Special" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_SpecialImage" ("id", "specialId", "url") SELECT "id", "specialId", "url" FROM "SpecialImage";
DROP TABLE "SpecialImage";
ALTER TABLE "new_SpecialImage" RENAME TO "SpecialImage";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
