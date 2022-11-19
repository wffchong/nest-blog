/*
  Warnings:

  - Added the required column `articleCount` to the `category` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `article` MODIFY `comments` INTEGER NOT NULL DEFAULT 0,
    MODIFY `viewCount` INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `category` ADD COLUMN `articleCount` INTEGER NOT NULL;
