-- DropForeignKey
ALTER TABLE "TopUp" DROP CONSTRAINT "TopUp_coordinatorId_fkey";

-- DropIndex
DROP INDEX "TopUp_agentId_key";

-- DropIndex
DROP INDEX "TopUp_coordinatorId_key";
