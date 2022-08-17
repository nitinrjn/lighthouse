const  { User, Industry, Calendar } = require("@prisma/client");

export const UserSample: User = {
    firstName: "Nicu",
    lastName: "Parente",
    email: 'hellothere@nicuparente.com',
    aboutMe: "I have over 8+ years of experience working in big tech companies as a software engineer and product manager. Prior to being in tech, I was a Grunt in the US Army for 10+ years combined from active duty and the National Guard.",
    currentJobTitle: "Product Manager",
    profileImage: "https://www.nicuparente.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FNicu-Headshot.1b9be0ae.jpg&w=828&q=75",
    mentor: true,
    seekingMentorship: true,
    affinity: ["MilitaryVeteran"],
    industry: Industry.TECHNOLOGY,
    linkedinLink: "www.linkedin.com/nicuparente",
    twitterLink: "www.twitter.com/nicuparente",
    calendarType: Calendar.GOOGLE,
    calendarLink: "https://calendar.app.google/nAszwHWx3tHYS8MY8",
    id: "",
    joinedDate: undefined,
    publicProfile: false
}


export const UserSample2 = {
    firstName: "Ricky",
    lastName: "Bobby",
    email:'first@notlastracing.com',
    aboutMe: "I have raced for many years. I initially thought you always had to finish first but my dad told me second is also fine",
    currentJob: "",
    previousJob: [""], //optional
    isMentor: true, //optional
    signUpDate: Date.now().toLocaleString(),
    profileImage: "https://pbs.twimg.com/profile_images/1264265275/Ricky_Bobby_closeup_400x400.jpg",
    competence: ["Career Transitions", "Software Development", "Product Management"],
    acceptingMentees: true, //optional
    mentees: [],
    community:[{
        _id: "",
        name: "MSSA"
    }],
    affinity: {
        militaryVeteran: false,
        noDegree: false,
        immigrant: false,
        woman: false,
        lgbtq: false,
        disabled: false,
        bipoc:false
    },
    industry: {
        aerospace: true,
        technology: true
    },
    socialLinks: {
            linkedIn:{
                url: "www.linkedin.com/nicuparente"
            },
            twitter: {
                url: "www.twitter.com/nicuparente"
            }
    },
    calendar: {
        calendarType: "Calendly",
        externalLink: "https://calendly.com/meet-nicu/office-hours",
      },
}