const {
    UserProfile,
    Industry,
    Calendar
} = require("@prisma/client");

module.exports = {
    UserSample: {
        firstName: "Nicu",
        lastName: "Parente",
        email: 'hellothere@nicuparente.com',
        aboutMe: "I have over 8+ years of experience working in big tech companies as a software engineer and product manager. Prior to being in tech, I was a Grunt in the US Army for 10+ years combined from active duty and the National Guard.",
        currentJobTitle: "Product Manager",
        profileImage: "https://www.nicuparente.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FNicu-Headshot.1b9be0ae.jpg&w=828&q=75",
        mentor: true,
        seekingMentorship: true,
        affinity: ["MilitaryVeteran"],
        chatTopics: [],
        industry: Industry.Technology,
        linkedinLink: "www.linkedin.com/nicuparente",
        twitterLink: "www.twitter.com/nicuparente",
        calendarType: Calendar.Google,
        calendarLink: "https://calendar.app.google/nAszwHWx3tHYS8MY8",
        id: "",
        joinedDate: undefined,
        publicProfile: false
    }
}