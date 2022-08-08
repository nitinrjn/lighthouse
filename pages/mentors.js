import { Center, Flex } from "@chakra-ui/react";
import UserHeroCard from "../components/User/UserHeroCard";

import { UserSample } from "../sample/UserSample";

const Mentors = (props) => {

    const user = UserSample;



    return <>
        <Flex 
         minWidth="100%"
         minHeight="100%"
         flexDirection="column"
         >
            {/* TODO: iterate through mentors */}
            <UserHeroCard user={user}/>
        </Flex>
    </>
}

export default Mentors;