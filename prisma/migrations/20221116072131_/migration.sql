/*
  Warnings:

  - You are about to drop the column `icon` on the `menu` table. All the data in the column will be lost.
  - Added the required column `component` to the `menu` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `menu` DROP COLUMN `icon`,
    ADD COLUMN `component` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `meta` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `icon` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
