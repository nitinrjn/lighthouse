export const UserSample = {
    firstName: "Nicu",
    lastName: "Parente",
    email:'nicuparente@gmail.com',
    aboutMe: "I have over 8+ years of experience working in big tech companies as a software engineer and product manager. Prior to being in tech, I was a Grunt in the US Army for 10+ years combined from active duty and the National Guard.",
    currentJob: "",
    previousJob: [""], //optional
    isMentor: true, //optional
    signUpDate: Date.now().toLocaleString(),
    profileImage: "https://www.nicuparente.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FNicu-Headshot.1b9be0ae.jpg&w=828&q=75",
    competence: ["Career Transitions", "Software Development", "Product Management"],
    acceptingMentees: true, //optional
    mentees: [],
    community:[{
        _id: "",
        name: "MSSA"
    }],
    affinity: {
        militaryVeteran: true,
        noDegree: true,
        immigrant: true,
        woman: false,
        lgbtq: false,
        disabled: false,
        bipoc:true
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