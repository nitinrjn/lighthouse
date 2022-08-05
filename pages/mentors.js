import { Center, Flex } from "@chakra-ui/react";
import UserHeroCard from "../components/User/UserHeroCard";

const Mentors = (props) => {
    return <>
        <Flex 
         minWidth="100%"
         minHeight="100%"
         flexDirection="column"
         >
            <UserHeroCard/>
            <UserHeroCard/>
            <UserHeroCard/>
        </Flex>
    </>
}

export default Mentors;