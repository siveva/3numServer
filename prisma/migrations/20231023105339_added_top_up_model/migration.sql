-- AlterTable
ALTER TABLE "User" ALTER COLUMN "wallet_balance" SET DATA TYPE DOUBLE PRECISION;

-- CreateTable
CREATE TABLE "TopUp" (
    "id" SERIAL NOT NULL,
    "coordinatorId" INTEGER NOT NULL,
    "agentId" INTEGER NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TopUp_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bet" (
    "id" SERIAL NOT NULL,
    "agentId" INTEGER NOT NULL,
    "drawType" TEXT NOT NULL,
    "betType" TEXT NOT NULL,
    "combination" INTEGER NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Bet_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TopUp_coordinatorId_key" ON "TopUp"("coordinatorId");

-- CreateIndex
CREATE UNIQUE INDEX "TopUp_agentId_key" ON "TopUp"("agentId");

-- CreateIndex
CREATE UNIQUE INDEX "Bet_agentId_key" ON "Bet"("agentId");

-- AddForeignKey
ALTER TABLE "TopUp" ADD CONSTRAINT "TopUp_coordinatorId_fkey" FOREIGN KEY ("coordinatorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bet" ADD CONSTRAINT "Bet_agentId_fkey" FOREIGN KEY ("agentId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
