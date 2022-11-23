/*
  Warnings:

  - You are about to drop the column `tagId` on the `article` table. All the data in the column will be lost.
  - Added the required column `tagIds` to the `article` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `article` DROP FOREIGN KEY `article_tagId_fkey`;

-- AlterTable
ALTER TABLE `article` DROP COLUMN `tagId`,
    ADD COLUMN `tagIds` VARCHAR(191) NOT NULL;
