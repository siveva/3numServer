-- CreateTable
CREATE TABLE "TestUser" (
    "id" SERIAL NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "coordinator_by_id" INTEGER NOT NULL,
    "wallet_balance" INTEGER NOT NULL,

    CONSTRAINT "TestUser_pkey" PRIMARY KEY ("id")
);
