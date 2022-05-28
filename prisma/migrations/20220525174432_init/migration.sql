-- CreateTable
CREATE TABLE "avatar" (
    "id" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "bg" TEXT NOT NULL,
    "clothes" TEXT,
    "face" TEXT,
    "hat" TEXT,

    CONSTRAINT "avatar_pkey" PRIMARY KEY ("id")
);
