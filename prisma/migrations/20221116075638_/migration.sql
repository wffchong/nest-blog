/*
  Warnings:

  - You are about to drop the `menu` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `meta` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `role` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `role` DROP FOREIGN KEY `role_userId_fkey`;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `role` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `menu`;

-- DropTable
DROP TABLE `meta`;

-- DropTable
DROP TABLE `role`;
