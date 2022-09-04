import { Center, Flex, Heading, CircularProgress } from "@chakra-ui/react";
import UserHeroCard from "../components/User/UserHeroCard";
import useSWR from 'swr';

import { UserSample } from "../prisma/sampleData";

const fetcher = (url: string) => fetch(url).then(res => res.json());

const Connect = (props) => {

    const { data: userConnections, isValidating, error } = useSWR('/api/connections', fetcher);

    return <>
        <Flex 
         minWidth="100%"
         maxWidth="1080px"
         minHeight="100%"
         flexDirection="column"
         alignItems="stretch"
         >
            <Center marginY="20px">
                <Heading>Lets spark some conversations. </Heading>
            </Center>
            
            {isValidating ? 
                <Center>
                    <CircularProgress  isIndeterminate color='yellow.500'/> 
                </Center>
                :
                <Flex flexDir="column">
                     {userConnections.userProfiles.map( (userProfile, index) =>{
                        return <UserHeroCard user={userProfile} key={userProfile.id}/>
                    })}
                </Flex>
            }

        </Flex>
    </>
}

export default Connect;