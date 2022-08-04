import { Center, Flex } from "@chakra-ui/react";
import UserHeroCard from "../components/User/UserHeroCard";

const Mentors = (props) => {
    return <>
        <Flex 
         flexWrap={true}
         minWidth="100%"
         minHeight="100%"
         justifyContent="space-between"
         >
            <UserHeroCard/>
            <UserHeroCard/>
            <UserHeroCard/>
        </Flex>
    </>
}

export default Mentors;