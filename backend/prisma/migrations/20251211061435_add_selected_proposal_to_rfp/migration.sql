/*
  Warnings:

  - A unique constraint covering the columns `[selectedProposalId]` on the table `Rfp` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Rfp" ADD COLUMN     "selectedProposalId" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "Rfp_selectedProposalId_key" ON "Rfp"("selectedProposalId");

-- AddForeignKey
ALTER TABLE "Rfp" ADD CONSTRAINT "Rfp_selectedProposalId_fkey" FOREIGN KEY ("selectedProposalId") REFERENCES "Proposal"("id") ON DELETE SET NULL ON UPDATE CASCADE;
