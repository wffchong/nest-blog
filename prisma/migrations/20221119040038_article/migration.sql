/*
  Warnings:

  - Added the required column `comments` to the `article` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tagsId` to the `article` table without a default value. This is not possible if the table is not empty.
  - Added the required column `viewCount` to the `article` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `article` ADD COLUMN `comments` INTEGER NOT NULL,
    ADD COLUMN `tagsId` INTEGER UNSIGNED NOT NULL,
    ADD COLUMN `viewCount` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `tags` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `tagName` VARCHAR(191) NOT NULL,
    `color` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `article` ADD CONSTRAINT `article_tagsId_fkey` FOREIGN KEY (`tagsId`) REFERENCES `tags`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
