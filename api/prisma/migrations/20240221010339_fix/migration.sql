/*
  Warnings:

  - You are about to drop the column `foto` on the `Profile` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "foto",
ADD COLUMN     "photo" TEXT DEFAULT 'https://res.cloudinary.com/runyshark1/image/upload/v1705369994/6326055_lg32yd.png';

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "accountActive" DROP NOT NULL;
