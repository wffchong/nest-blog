/*
  Warnings:

  - You are about to drop the column `roleId` on the `user` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[roleName]` on the table `role` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `roleName` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `user_roleId_fkey`;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `roleId`,
    ADD COLUMN `roleName` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `role_roleName_key` ON `role`(`roleName`);

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `user_roleName_fkey` FOREIGN KEY (`roleName`) REFERENCES `role`(`roleName`) ON DELETE RESTRICT ON UPDATE CASCADE;
