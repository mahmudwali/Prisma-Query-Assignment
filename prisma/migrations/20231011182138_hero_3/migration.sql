/*
  Warnings:

  - You are about to drop the column `image` on the `post_comment` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `post_comment` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `post_comment` table. All the data in the column will be lost.
  - You are about to drop the column `unit` on the `post_comment` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `post_comment` table. All the data in the column will be lost.
  - You are about to drop the column `customer_id` on the `tag` table. All the data in the column will be lost.
  - You are about to drop the column `discount` on the `tag` table. All the data in the column will be lost.
  - You are about to drop the column `payable` on the `tag` table. All the data in the column will be lost.
  - You are about to drop the column `total` on the `tag` table. All the data in the column will be lost.
  - You are about to drop the column `vat` on the `tag` table. All the data in the column will be lost.
  - Added the required column `content` to the `category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `authorId` to the `post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `content` to the `post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `metaTitle` to the `post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `summary` to the `post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `content` to the `post_comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `post_comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `post_comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `content` to the `tag` table without a default value. This is not possible if the table is not empty.
  - Added the required column `metaTitle` to the `tag` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `tag` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `tag` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `category` ADD COLUMN `content` TEXT NOT NULL,
    ADD COLUMN `slug` VARCHAR(100) NOT NULL,
    MODIFY `metaTitle` VARCHAR(100) NOT NULL;

-- AlterTable
ALTER TABLE `post` ADD COLUMN `authorId` BIGINT UNSIGNED NOT NULL,
    ADD COLUMN `content` TEXT NOT NULL,
    ADD COLUMN `metaTitle` VARCHAR(100) NOT NULL,
    ADD COLUMN `slug` VARCHAR(100) NOT NULL,
    ADD COLUMN `summary` TINYTEXT NOT NULL,
    ADD COLUMN `title` VARCHAR(50) NOT NULL;

-- AlterTable
ALTER TABLE `post_comment` DROP COLUMN `image`,
    DROP COLUMN `name`,
    DROP COLUMN `price`,
    DROP COLUMN `unit`,
    DROP COLUMN `user_id`,
    ADD COLUMN `content` TEXT NOT NULL,
    ADD COLUMN `slug` VARCHAR(100) NOT NULL,
    ADD COLUMN `title` VARCHAR(50) NOT NULL;

-- AlterTable
ALTER TABLE `tag` DROP COLUMN `customer_id`,
    DROP COLUMN `discount`,
    DROP COLUMN `payable`,
    DROP COLUMN `total`,
    DROP COLUMN `vat`,
    ADD COLUMN `content` TEXT NOT NULL,
    ADD COLUMN `metaTitle` VARCHAR(100) NOT NULL,
    ADD COLUMN `slug` VARCHAR(100) NOT NULL,
    ADD COLUMN `title` VARCHAR(50) NOT NULL;
