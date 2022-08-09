import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  Badge,
  Text,
  Container,
  Heading
} from "@chakra-ui/react";

import { FaLinkedin, FaTwitterSquare} from "react-icons/fa";

import { InlineWidget } from 'react-calendly';


import AffinityTags from "./AffinityTags";


const UserHeroCard = (props) =>{

    const user = props.user;

    return (
        <Center margin="10px" >
            <Flex p="5" borderRadius="md"  minWidth="350px" boxShadow="lg"  borderWidth="1px">
              <Flex  flexDirection="column" marginLeft="10px" minWidth="350px">
                  <Flex alignItems="center" minWidth="350px">
                    <Avatar size='xl' name={`${user.firstName} ${user.lastName}`} src={user.profileImage} />
                    <Box marginLeft="10px">
                      <Heading size="lg"  lineHeight="short">
                        {user.firstName} {user.lastName}
                      </Heading>
                      <AffinityTags userAffinity={user.affinity}/>
                    </Box>
                  </Flex>
                  <Box>
                    <Text marginTop="20px" fontSize="lg" fontWeight="semibold" lineHeight="short">
                        About Me
                    </Text>
                    <Text marginY="5px" mindWidth="350px">
                     {user.aboutMe}
                    </Text>

                    {/* TODO: Add Competency View */}
                    {/* <Text marginTop="20px" fontSize="lg" fontWeight="semibold" lineHeight="short">
                      Area of Expertise 
                    </Text>

                    {user.competence.map((domain,index) =>{
                      return <Text key={index}>
                         {domain}
                      </Text>
                    })} */}
                    <Text marginTop="20px" fontSize="lg" fontWeight="semibold" lineHeight="short">
                      Links 
                    </Text>
                    {user.socialLinks.twitter.url != '' ? 
                      <Button colorScheme='twitter' size="lg" variant='ghost' leftIcon={<FaTwitterSquare />}>
                        Twitter
                      </Button>
                    : ""  
                    }

                    {user.socialLinks.linkedIn.url != '' ? 
                      <Button colorScheme='gray' size="lg" variant='ghost' leftIcon={<FaLinkedin />}>
                        LinkedIn
                      </Button>
                    : ""  
                    }

                </Box>
              </Flex>             
                <Box width="100%">
                    <InlineWidget 
                     styles={{height: '400px'}} 
                     pageSettings={{
                        backgroundColor: 'ffffff',
                        hideEventTypeDetails: true,
                        hideLandingPageDetails: true,
                        primaryColor: '00a2ff',
                        textColor: '4d5055'
                      }}
                      prefill={{
                        email: user.email,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        name: `${user.firstName} ${user.lastName}`
                      }}
                     url="https://calendly.com/meet-nicu/office-hours" />
                    {/* <Box width="100%" height="100%">
                      <iframe
                        width="100%" 
                        height={400}
                        src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3ISE7FiVmgezkfNvN3vo4lbbDhstrUoJIjSs2_qPOlF4xr802jGckXxJJAxuE1hVFIinK0pPFs"
                      />
                    </Box> */}

                </Box>
            </Flex>
      </Center>
    )
}

export default UserHeroCard