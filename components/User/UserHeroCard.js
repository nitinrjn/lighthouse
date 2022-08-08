import {
  Avatar,
  Box,
  Center,
  Flex,
  Badge,
  Text,
  Container,
  Heading
} from "@chakra-ui/react";
import {SiLinkedin} from "react-icons/si";

import { InlineWidget } from 'react-calendly';


import AffinityTags from "./AffinityTags";


const UserHeroCard = (props) =>{

    const user = props.user;

    return (
        <Center margin="10px" >
            <Flex p="5" borderRadius="md"  minWidth="350px" maxWidth="1080px" boxShadow="lg"  borderWidth="1px">
              <Flex  flexDirection="column" marginLeft="10px" alignItems="center" minWidth="350px">
                  <Flex alignItems="center" minWidth="350px">
                    <Avatar size='xl' name='Nicu Parente' src={user.profileImage} />
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
                    <Text marginY="5px">
                     {user.aboutMe}
                    </Text>

                    <Text marginTop="20px" fontSize="lg" fontWeight="semibold" lineHeight="short">
                      Area of Expertise 
                    </Text>

                    {user.competence.map((domain,index) =>{
                      return <Text key={index}>
                         {domain}
                      </Text>
                    })}
                    <Text marginTop="20px" fontSize="lg" fontWeight="semibold" lineHeight="short">
                      Links 
                    </Text>
                    {["www.linkedin.com/nicuparente", "www.nicuparente.com", "twitter.com/nicuparente"].map((domain,index) =>{
                      return <Text key={index}>
                         {domain}
                      </Text>
                    })}
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
                        email: 'test@test.com',
                        firstName: 'Jon',
                        lastName: 'Snow',
                        name: 'Jon Snow',
                        guests: [
                          'janedoe@example.com',
                        ]
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