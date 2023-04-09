-- CreateTable
CREATE TABLE "Todo" (
    "id" SERIAL NOT NULL,
    "isDone" BOOLEAN NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Todo_pkey" PRIMARY KEY ("id")
);
