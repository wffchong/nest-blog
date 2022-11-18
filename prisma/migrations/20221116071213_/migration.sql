/*
  Warnings:

  - You are about to drop the `permission` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `permission` DROP FOREIGN KEY `permission_roleId_fkey`;

-- DropTable
DROP TABLE `permission`;

-- CreateTable
CREATE TABLE `menu` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `parentId` INTEGER NOT NULL,
    `path` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `icon` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
