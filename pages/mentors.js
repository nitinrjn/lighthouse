import { Center, Flex } from "@chakra-ui/react";
import UserHeroCard from "../components/User/UserHeroCard";

const Mentors = (props) => {

    const user1 = {
        firstName: "Nicu",
        lastName: "Parente",
        aboutMe: "I have over 8+ years of experience working in big tech companies as a software engineer and product manager.",
        currentJob: "",
        previousJob: [""],
        isMentor: true,
        signUpDate: Date.now().toLocaleString(),
        profileImage: "https://dsm01pap004files.storage.live.com/y4mLw1XEHlb1VQpHHoKor2qudDieb5_60Za4Fj1xPBWf3Xg0swI9Aev6qwM89CKupOPrgFXiupuVrvgD4yFWkh03xpYIWkmKTdfx7TbPMMYn-T9UUDqBc1EJkENzb6OaVqFiBi24y-3zmYogUIkE0ipo3iu1XE-pbqizszWb9oJapLUlsBOq2EGG0ZINZ3jhUrQ?width=599&height=610&cropmode=none",
        competence: ["Career Transitions", "Software Development", "Product Management"],
        acceptingMentees: true,
        community:[{
            _id: "",
            name: "MSSA"
        }],
        hereFor: [],
        affinity: {
            militaryVeteran: true,
            noDegree: true,
            immigrant: true,
            woman: false,
            lgbtq: false,
            disabled: false,
            minority:true
        },
        industry: {
            aerospace: true,
            technology: true
        },
        socialLinks: [
            {
                type: "LinkedIn",
                url: "www.linkedin.com/nicuparente"
            },
            {
                type: "Twitter",
                url: "www.twitter.com/nicuparente"
            }
        ],
        calendar: {
            calendarType: "Calendly",
            externalLink: "https://calendly.com/meet-nicu/office-hours",
          },
    }



    return <>
        <Flex 
         minWidth="100%"
         minHeight="100%"
         flexDirection="column"
         >
            {/* TODO: iterate through mentors */}
            <UserHeroCard user={user1}/>
            <UserHeroCard user={user1}/>
        </Flex>
    </>
}

export default Mentors;