import { Avatar, Box, Center, Flex, Badge, Text, Container } from "@chakra-ui/react";
import { InlineWidget } from 'react-calendly'


const UserHeroCard = (props) =>{

    
    return (
        <Center margin="10px" >
            <Box p="5" borderRadius="sm" width="100%" minWidth="350px" maxWidth="1080px" boxShadow="lg"  borderWidth="1px">
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
              <Flex>
                <Container>
                    <Text marginTop="20px" fontSize="lg" fontWeight="semibold" lineHeight="short">
                        About Me
                    </Text>
                    <Text marginY="5px">
                    I have over 8+ years of experience working in big tech companies as a software engineer and product manager.
                    </Text>

                    <Text marginTop="20px" fontSize="lg" fontWeight="semibold" lineHeight="short">
                      Area of Expertise 
                    </Text>

                    {["Career Transitions", "Software Developlment", "Product Management"].map((domain,index) =>{
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
                </Container>
                <Container>
                    <Text marginTop="20px" fontSize="lg" fontWeight="semibold" lineHeight="short">
                        Availability
                    </Text>
                    <InlineWidget 
                     styles={{height: '400px'}} 
                     pageSettings={{
                        backgroundColor: 'ffffff',
                        hideEventTypeDetails: false,
                        hideLandingPageDetails: false,
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
                </Container>

              </Flex>
            </Box>
      </Center>
    )
}

export default UserHeroCard