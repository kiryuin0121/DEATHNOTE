-- CreateTable
CREATE TABLE "Person" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "size" TEXT NOT NULL,
    "top" INTEGER NOT NULL,
    "left" INTEGER NOT NULL,
    "characterId" TEXT NOT NULL,
    "castId" TEXT NOT NULL,
    CONSTRAINT "Person_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Person_castId_fkey" FOREIGN KEY ("castId") REFERENCES "Cast" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Character" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "description" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Cast" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "comment" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "Person_characterId_key" ON "Person"("characterId");

-- CreateIndex
CREATE UNIQUE INDEX "Person_castId_key" ON "Person"("castId");
