-- CreateTable
CREATE TABLE "buyies" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "productId" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "WishList" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "userId" TEXT NOT NULL
);
