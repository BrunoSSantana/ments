/*
  Warnings:

  - Made the column `password` on table `Mentored` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Mentored" ALTER COLUMN "password" SET NOT NULL;
