/*
  Warnings:

  - You are about to drop the column `role` on the `user` table. All the data in the column will be lost.
  - You are about to drop the `menu` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `role`;

-- DropTable
DROP TABLE `menu`;

-- CreateTable
CREATE TABLE `role` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `roleName` VARCHAR(191) NOT NULL,
    `userId` INTEGER UNSIGNED NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `permission` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `permissionName` VARCHAR(191) NOT NULL,
    `roleId` INTEGER UNSIGNED NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `role` ADD CONSTRAINT `role_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `permission` ADD CONSTRAINT `permission_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `role`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
