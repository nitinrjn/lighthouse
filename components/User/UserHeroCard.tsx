import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  Badge,
  Text,
  Container,
  Heading,
  Spacer
} from "@chakra-ui/react";
import {UserProfile, Calendar} from "@prisma/client";
import { FaLinkedin, FaTwitterSquare} from "react-icons/fa";
import { InlineWidget } from 'react-calendly';
import { useUser } from "@auth0/nextjs-auth0";

import AffinityTags from "./AffinityTags";


const UserHeroCard = (props) =>{
     const {user, error} = useUser();

    const connectionProfile: UserProfile = props.user;

    return (
        <Center marginY="10px" maxWidth="1080px" width="100%" minHeight="70vh">
            <Flex p="5" borderRadius="md"  minWidth="350px" boxShadow="lg"  borderWidth="1px" width="100%">
              <Flex  flexDirection="column" marginLeft="10px" minWidth="350px" maxWidth="75%">
                  <Flex alignItems="center" minWidth="350px">
                    <Avatar size='xl' name={`${connectionProfile.firstName} ${connectionProfile.lastName}`} src={connectionProfile.profileImage} />
                    <Box marginLeft="10px">
                      <Heading size="lg"  lineHeight="short">
                        {connectionProfile.firstName} {connectionProfile.lastName}
                      </Heading>
                      <AffinityTags userAffinity={connectionProfile.affinity}/>
                    </Box>
                  </Flex>
                  <Box>
                    <Text marginTop="20px" fontSize="lg" fontWeight="semibold" lineHeight="short">
                        About Me
                    </Text>
                    <Text marginY="5px" minWidth="350px" width="90%">
                     {connectionProfile.aboutMe}
                    </Text>

                    <Text marginTop="20px" fontSize="lg" fontWeight="semibold" lineHeight="short">
                        Lets Chat About
                    </Text>
                    <Text marginY="5px" minWidth="350px" width="90%">
                      Thing 1
                    </Text>
                    <Text marginY="5px" minWidth="350px" width="90%">
                      Thing 2
                    </Text>

                    <Text marginTop="20px" fontSize="lg" fontWeight="semibold" lineHeight="short">
                      Links 
                    </Text>
                    {connectionProfile.twitterLink != '' ? 
                      <Button colorScheme='twitter' size="lg" variant='ghost' leftIcon={<FaTwitterSquare />}>
                        Twitter
                      </Button>
                    : ""  
                    }

                    {connectionProfile.linkedinLink != '' ? 
                      <Button colorScheme='gray' size="lg" variant='ghost' leftIcon={<FaLinkedin />}>
                        LinkedIn
                      </Button>
                    : ""  
                    }

                </Box>
              </Flex>  
              <Spacer/>     
              {connectionProfile.calendarType == Calendar.Calendly ?       
                <Box maxWidth="400px"  minWidth="350px"width="100%" height="100%">
                    <InlineWidget 
                     styles={{height: '100%'}} 
                     pageSettings={{
                        backgroundColor: 'ffffff',
                        hideEventTypeDetails: true,
                        hideLandingPageDetails: true,
                        primaryColor: '00a2ff',
                        textColor: '4d5055'
                      }}
                      prefill={{
                        email: user.email,
                        firstName: user.given_name,
                        lastName: user.family_name,
                        name: `${user.firstName} ${user.lastName}`
                      }}
                     url={connectionProfile.calendarLink} />
                </Box>
                : ""}
                { connectionProfile.calendarType == Calendar.Google ? 
                  <Box  maxWidth="400px" minWidth="350px" width="100%" height="100%">
                    <iframe
                      width="100%" 
                      height={400}
                      src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3ISE7FiVmgezkfNvN3vo4lbbDhstrUoJIjSs2_qPOlF4xr802jGckXxJJAxuE1hVFIinK0pPFs"
                    />
                  </Box> 
                  :""
                }
                
            </Flex>
      </Center>
    )
}

export default UserHeroCard