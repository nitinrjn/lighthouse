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
  Spacer,
  Checkbox
} from "@chakra-ui/react";
import {UserProfile, Calendar} from "@prisma/client";
import { FaLinkedin, FaTwitterSquare} from "react-icons/fa";
import { InlineWidget } from 'react-calendly';
import { useUser } from "@auth0/nextjs-auth0";
import { useRouter } from 'next/router'

import AffinityTags from "./AffinityTags";
import CalendarHidden from "./CalendarHidden";
import UserCalendar from "./UserCalendar";




const UserHeroCard = (props) =>{
    const {user, error} = useUser();
    const router = useRouter();
    const connectionProfile: UserProfile = props.user;

    console.log(user)
    return (
        <Box marginY="10px" maxWidth="1080px" width="100%">
            <Flex p="5" borderRadius="md"  minWidth="320px" boxShadow="lg"  borderWidth="1px" width="100%" flexWrap={["wrap","wrap","nowrap","nowrap"]} >
              <Flex  flexDirection="column" marginLeft="10px" minWidth="320px" maxWidth="75%">
                  <Flex alignItems="center" minWidth="320px">
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
                    <Text marginY="5px" minWidth="320px" width="90%">
                     {connectionProfile.aboutMe}
                    </Text>

                    {/* TODO: Add to chat about topics */}
                    {/* <Text marginTop="20px" fontSize="lg" fontWeight="semibold" lineHeight="short">
                        Let's Chat About 
                    </Text> */}

                    {connectionProfile.twitterLink != '' || connectionProfile.linkedinLink != '' ? 
                      <Text marginTop="20px" fontSize="lg" fontWeight="semibold" lineHeight="short">
                        Social Links
                      </Text>
                      : ""
                    }

                    <Flex marginTop="5px" width="100%">
                      {connectionProfile.twitterLink != '' ? 
                        <Button 
                          as="a" 
                          target="_blank" 
                          onClick={(e)=>{e.preventDefault(); 
                          router.push(`${connectionProfile.twitterLink}`)}} 
                          colorScheme='twitter' 
                          size="lg"  
                          leftIcon={<FaTwitterSquare />}>
                          Twitter
                        </Button>
                      : ""  
                      }

                      {connectionProfile.linkedinLink != '' ? 
                        <Button 
                          marginLeft="10px"
                          as="a" 
                          target="_blank" 
                          onClick={(e)=>{e.preventDefault(); router.push(`${connectionProfile.linkedinLink}`)}} 
                          colorScheme='gray' 
                          size="lg" 
                          leftIcon={<FaLinkedin />}>
                          LinkedIn
                        </Button>
                      : ""  
                      }
                    </Flex>
                    
                </Box>
              </Flex>  
              <Spacer/>    
              
              <UserCalendar 
                calendarType={connectionProfile.calendarType}
                calendarLink={connectionProfile.calendarLink}
                user={user}
              />

            </Flex>
      </Box>
    )
}

export default UserHeroCard