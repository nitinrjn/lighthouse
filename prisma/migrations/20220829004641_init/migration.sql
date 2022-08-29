-- CreateEnum
CREATE TYPE "Calendar" AS ENUM ('Calendly', 'Google');

-- CreateEnum
CREATE TYPE "Industry" AS ENUM ('Agriculture', 'Aviation', 'Food', 'Hospitality', 'Technology', 'RealEstate', 'Sales');

-- CreateEnum
CREATE TYPE "Topics" AS ENUM ('CareerTransition', 'CareerBreak', 'Entrepreneurship', 'Marketing', 'PersonalFinance', 'PersonalBranding', 'Podcasting', 'ShareStories', 'SOFTWARE_DEVELOPMENT');

-- CreateTable
CREATE TABLE "UserProfile" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "aboutMe" TEXT NOT NULL,
    "currentJobTitle" TEXT NOT NULL,
    "mentor" BOOLEAN DEFAULT false,
    "profileImage" TEXT NOT NULL,
    "seekingMentorship" BOOLEAN DEFAULT false,
    "affinity" TEXT[],
    "industry" "Industry",
    "chatTopics" "Topics"[],
    "linkedinLink" TEXT,
    "twitterLink" TEXT,
    "calendarType" "Calendar",
    "calendarLink" TEXT,
    "publicProfile" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "UserProfile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserProfile_email_key" ON "UserProfile"("email");
