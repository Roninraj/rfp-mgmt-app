-- CreateTable
CREATE TABLE "Rfp" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "descriptionRaw" TEXT NOT NULL,
    "budget" DOUBLE PRECISION,
    "currency" TEXT DEFAULT 'USD',
    "deliveryBy" TIMESTAMP(3),
    "paymentTerms" TEXT,
    "requirements" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Rfp_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vendor" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "contactPerson" TEXT,
    "notes" TEXT,

    CONSTRAINT "Vendor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RfpVendor" (
    "id" SERIAL NOT NULL,
    "rfpId" INTEGER NOT NULL,
    "vendorId" INTEGER NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'invited',

    CONSTRAINT "RfpVendor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Proposal" (
    "id" SERIAL NOT NULL,
    "rfpId" INTEGER NOT NULL,
    "vendorId" INTEGER NOT NULL,
    "emailMessageId" TEXT,
    "parsedAt" TIMESTAMP(3),
    "totalPrice" DOUBLE PRECISION,
    "currency" TEXT DEFAULT 'USD',
    "deliveryDays" INTEGER,
    "warrantyMonths" INTEGER,
    "paymentTermsText" TEXT,
    "lineItems" JSONB,
    "rawExtracted" JSONB,

    CONSTRAINT "Proposal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProposalScore" (
    "id" SERIAL NOT NULL,
    "proposalId" INTEGER NOT NULL,
    "priceScore" DOUBLE PRECISION,
    "deliveryScore" DOUBLE PRECISION,
    "warrantyScore" DOUBLE PRECISION,
    "overallScore" DOUBLE PRECISION,
    "explanation" TEXT,

    CONSTRAINT "ProposalScore_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ProposalScore_proposalId_key" ON "ProposalScore"("proposalId");

-- AddForeignKey
ALTER TABLE "RfpVendor" ADD CONSTRAINT "RfpVendor_rfpId_fkey" FOREIGN KEY ("rfpId") REFERENCES "Rfp"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RfpVendor" ADD CONSTRAINT "RfpVendor_vendorId_fkey" FOREIGN KEY ("vendorId") REFERENCES "Vendor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Proposal" ADD CONSTRAINT "Proposal_rfpId_fkey" FOREIGN KEY ("rfpId") REFERENCES "Rfp"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Proposal" ADD CONSTRAINT "Proposal_vendorId_fkey" FOREIGN KEY ("vendorId") REFERENCES "Vendor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProposalScore" ADD CONSTRAINT "ProposalScore_proposalId_fkey" FOREIGN KEY ("proposalId") REFERENCES "Proposal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
