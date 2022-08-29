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




const UserHeroCard = (props) =>{
    const {user, error} = useUser();
    const router = useRouter();

    const connectionProfile: UserProfile = props.user;

    return (
        <Center marginY="10px" maxWidth="1080px" width="100%" minHeight="70vh">
            <Flex p="5" borderRadius="md"  minWidth="350px" boxShadow="lg"  borderWidth="1px" width="100%" >
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
                  
              {connectionProfile.calendarType == Calendar.Calendly ?       
                <Box maxWidth="400px" minHeight="350px" minWidth="350px" width="100%" height="100%">
                   {user?  <InlineWidget 
                     styles={{height: '350px'}} 
                     pageSettings={{
                        backgroundColor: 'ffffff',
                        hideEventTypeDetails: true,
                        hideLandingPageDetails: true,
                        primaryColor: '00a2ff',
                        textColor: '4d5055'
                      }}
                      prefill={{
                        email: user?.email || "",
                        firstName: user?.given_name || "",
                        lastName: user?.family_name || "",
                        name: `${user.firstName} ${user.lastName}`
                      }}
                     url={connectionProfile.calendarLink} /> 
                     : 
                      <CalendarHidden/>
                     }
                </Box>
                : ""}
              {connectionProfile.calendarType == Calendar.Google ? 
                <Box  maxWidth="400px" minWidth="350px" width="100%" minHeight={"350px"} height="100%">
                {user ? 
                  <iframe
                  width="100%" 
                  height={400}
                  src={connectionProfile.calendarLink}
                  />
                :
                  <CalendarHidden/>
                }
                </Box> 
                :""
              }
                
            </Flex>
      </Center>
    )
}

export default UserHeroCard