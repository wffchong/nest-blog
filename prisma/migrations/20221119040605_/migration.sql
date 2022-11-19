/*
  Warnings:

  - You are about to drop the column `tagsId` on the `article` table. All the data in the column will be lost.
  - You are about to drop the `tags` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `tagId` to the `article` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `article` DROP FOREIGN KEY `article_tagsId_fkey`;

-- AlterTable
ALTER TABLE `article` DROP COLUMN `tagsId`,
    ADD COLUMN `tagId` INTEGER UNSIGNED NOT NULL;

-- DropTable
DROP TABLE `tags`;

-- CreateTable
CREATE TABLE `tag` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `tagName` VARCHAR(191) NOT NULL,
    `color` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `article` ADD CONSTRAINT `article_tagId_fkey` FOREIGN KEY (`tagId`) REFERENCES `tag`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
