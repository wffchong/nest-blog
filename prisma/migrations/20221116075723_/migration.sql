/*
  Warnings:

  - You are about to drop the column `role` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `role`;

-- CreateTable
CREATE TABLE `role` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `roleName` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `menu` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `path` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `component` VARCHAR(191) NOT NULL,
    `parentId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
