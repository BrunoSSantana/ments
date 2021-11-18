-- CreateTable
CREATE TABLE "Mentor" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "github" TEXT NOT NULL,
    "linkedin" TEXT,
    "m_max" INTEGER NOT NULL,
    "about" TEXT NOT NULL,
    "field" TEXT NOT NULL,
    "languages" TEXT[],

    CONSTRAINT "Mentor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Mentorado" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "github" TEXT NOT NULL,
    "linkedin" TEXT,
    "about" TEXT NOT NULL,
    "field" TEXT NOT NULL,
    "languages" TEXT[],
    "mentorId" TEXT,

    CONSTRAINT "Mentorado_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Mentorado" ADD CONSTRAINT "Mentorado_mentorId_fkey" FOREIGN KEY ("mentorId") REFERENCES "Mentor"("id") ON DELETE SET NULL ON UPDATE CASCADE;
