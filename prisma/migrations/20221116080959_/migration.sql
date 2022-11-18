/*
  Warnings:

  - Added the required column `metaId` to the `menu` table without a default value. This is not possible if the table is not empty.
  - Added the required column `roleId` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `menu` ADD COLUMN `metaId` INTEGER UNSIGNED NOT NULL,
    ADD COLUMN `redirect` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `roleId` INTEGER UNSIGNED NOT NULL;

-- CreateTable
CREATE TABLE `meta` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `icon` VARCHAR(191) NOT NULL,
    `isLint` VARCHAR(191) NOT NULL,
    `isHide` BOOLEAN NOT NULL,
    `isFull` BOOLEAN NOT NULL,
    `isAffix` BOOLEAN NOT NULL,
    `isKeepAlive` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `user_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `role`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `menu` ADD CONSTRAINT `menu_metaId_fkey` FOREIGN KEY (`metaId`) REFERENCES `meta`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
