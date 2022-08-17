-- CreateEnum
CREATE TYPE "Calendar" AS ENUM ('CALENDLY', 'GOOGLE');

-- CreateEnum
CREATE TYPE "Industry" AS ENUM ('AGRICULTURE', 'AVIATION', 'FOOD', 'HOSPITALITY', 'TECHNOLOGY', 'REAL_ESTATE', 'SALES');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "aboutMe" TEXT NOT NULL,
    "currentJobTitle" TEXT NOT NULL,
    "mentor" BOOLEAN DEFAULT false,
    "joinedDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "profileImage" TEXT NOT NULL,
    "seekingMentorship" BOOLEAN DEFAULT false,
    "affinity" TEXT[],
    "industry" "Industry" NOT NULL,
    "linkedinLink" TEXT NOT NULL,
    "twitterLink" TEXT,
    "calendarType" "Calendar",
    "calendarLink" TEXT,
    "publicProfile" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
