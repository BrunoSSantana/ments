/*
  Warnings:

  - You are about to drop the `Mentorado` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Mentorado" DROP CONSTRAINT "Mentorado_mentorId_fkey";

-- DropTable
DROP TABLE "Mentorado";

-- CreateTable
CREATE TABLE "Mentored" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "github" TEXT NOT NULL,
    "linkedin" TEXT,
    "about" TEXT NOT NULL,
    "field" TEXT NOT NULL,
    "languages" TEXT[],
    "mentorId" TEXT,

    CONSTRAINT "Mentored_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Mentored" ADD CONSTRAINT "Mentored_mentorId_fkey" FOREIGN KEY ("mentorId") REFERENCES "Mentor"("id") ON DELETE SET NULL ON UPDATE CASCADE;
