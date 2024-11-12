/*
  Warnings:

  - You are about to drop the column `paymentmethod` on the `Transaction` table. All the data in the column will be lost.
  - Added the required column `paymentMethod` to the `Transaction` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Transaction" DROP COLUMN "paymentmethod",
DROP COLUMN "paymentMethod",
ADD COLUMN     "paymentMethod" "TransactionPaymentMethod" NOT NULL;
