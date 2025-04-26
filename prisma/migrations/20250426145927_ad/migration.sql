-- CreateTable
CREATE TABLE "GlobalMessage" (
    "id" TEXT NOT NULL,
    "fromId" TEXT NOT NULL,
    "text" TEXT NOT NULL,

    CONSTRAINT "GlobalMessage_pkey" PRIMARY KEY ("id")
);
