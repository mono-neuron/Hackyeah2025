/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Category` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[accountId]` on the table `Coordinator` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `type` to the `Account` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `Coordinator` table without a default value. This is not possible if the table is not empty.
  - Added the required column `organisationId` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `over18` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `position` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "AccountType" AS ENUM ('UNKNOWN', 'ORGANISATION', 'VOLUNTEER', 'COORDINATOR', 'ADMIN');

-- AlterTable
ALTER TABLE "Account" ADD COLUMN     "type" "AccountType" NOT NULL;

-- AlterTable
ALTER TABLE "Coordinator" ADD COLUMN     "phone" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "organisationId" INTEGER NOT NULL,
ADD COLUMN     "over18" BOOLEAN NOT NULL,
ADD COLUMN     "position" TEXT NOT NULL,
ADD COLUMN     "volunteersCount" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Coordinator_accountId_key" ON "Coordinator"("accountId");

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_organisationId_fkey" FOREIGN KEY ("organisationId") REFERENCES "Organisation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
