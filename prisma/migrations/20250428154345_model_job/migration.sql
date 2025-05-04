-- CreateTable
CREATE TABLE "job" (
    "id" SERIAL NOT NULL,
    "title" TEXT,
    "desc" TEXT,
    "location" TEXT,
    "type" TEXT,
    "company" TEXT,

    CONSTRAINT "job_pkey" PRIMARY KEY ("id")
);
