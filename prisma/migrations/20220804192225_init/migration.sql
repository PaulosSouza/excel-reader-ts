-- CreateTable
CREATE TABLE "Fields" (
    "id" TEXT NOT NULL,
    "wo" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "leadTech" TEXT NOT NULL,
    "service" TEXT NOT NULL,
    "techs" TEXT NOT NULL,
    "lbrHrs" INTEGER NOT NULL,
    "partsCosts" INTEGER NOT NULL,
    "payment" TEXT NOT NULL,

    CONSTRAINT "Fields_pkey" PRIMARY KEY ("id")
);
