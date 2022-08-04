import { Avatar, Box, Center, Flex, Badge, Text } from "@chakra-ui/react";
import { InlineWidget } from 'react-calendly'


const UserHeroCard = (props) =>{

    
    return (
        <Center h="100vh" margin="10px" >
            <Box p="5" borderRadius="sm" minWidth="350px" maxWidth="700px" boxShadow="lg"  borderWidth="1px">
              <Center>
                <Avatar size='2xl' name='Segun Adebayo' src='https://www.nicuparente.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FNicu-Headshot.1b9be0ae.jpg&w=828&q=75' />{' '}
              </Center>
              <Text textAlign="center" marginY="5px" fontSize="2xl" fontWeight="semibold" lineHeight="short">
                Nicu Parente
              </Text>
              <Center 
               width="100%" 
               marginY="5px"> 
                <Badge marginRight="10px" colorScheme="green">Veteran</Badge>
                <Badge marginRight="10px" colorScheme="blue">No-Degree</Badge>
              </Center>
              <Text marginTop="20px" fontSize="lg" fontWeight="semibold" lineHeight="short">
                About Me
              </Text>
              <Text marginY="5px">
              I have over 8+ years of experience working in big tech companies as a software engineer and product manager.
              </Text>

              
              <Text marginTop="20px" fontSize="lg" fontWeight="semibold" lineHeight="short">
                Area of Expertise 
              </Text>

              {["Career Transitions", "Software Developlment", "Product Management"].map(domain =>{
                return <Text>
                   {domain}
                </Text>
              })}

              <Text marginTop="20px" fontSize="lg" fontWeight="semibold" lineHeight="short">
                Availability
              </Text>
              <InlineWidget url="https://calendly.com/meet-nicu/office-hours" />
            </Box>
      </Center>
    )
}

export default UserHeroCard