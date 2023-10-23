/*
  Warnings:

  - You are about to drop the `TestUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "TestUser";

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "coordinator_by_id" INTEGER NOT NULL,
    "wallet_balance" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
