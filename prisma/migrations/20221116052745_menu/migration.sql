-- CreateTable
CREATE TABLE `menu` (
    `path` VARCHAR(191) NOT NULL,
    `icon` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `menu_path_key`(`path`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
