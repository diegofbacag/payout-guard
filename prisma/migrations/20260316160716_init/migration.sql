-- CreateTable
CREATE TABLE "Report" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "order_id" VARCHAR(50) NOT NULL,
    "payload_id" VARCHAR(50) NOT NULL,
    "net_payout" INTEGER NOT NULL,

    CONSTRAINT "Report_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Report_order_id_key" ON "Report"("order_id");
