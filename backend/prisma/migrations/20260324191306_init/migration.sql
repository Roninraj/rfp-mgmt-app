-- DropForeignKey
ALTER TABLE "Rfp" DROP CONSTRAINT "Rfp_requesterId_fkey";

-- AddForeignKey
ALTER TABLE "Rfp" ADD CONSTRAINT "Rfp_requesterId_fkey" FOREIGN KEY ("requesterId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
