import { Box, Heading, Flex, Center, Button, Text, AspectRatio, CircularProgress, Avatar, VStack } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import useSWR from 'swr'
import NextLink from "next/link";


import LightHouseLogo from '../public/Lighthouse-Connections-Logo.png'


const fetcher = (url: string) => fetch(url).then(res => res.json());


export default function Home() {
  const { data: userConnections, isValidating, error } = useSWR('/api/connections?featured=5', fetcher);

  return (
    <>
      <Head>
        <title>Lighthouse</title>
        <meta name="description" content="Nicu Parente" />
      </Head>

      <VStack minW="100%" maxW="1080px">
          <Image
            src={LightHouseLogo}
            alt="Lighthouse Logo"
          />
          <Box>
            <Heading marginY="20px" width="100%" textAlign="center">See some of our members ready to help</Heading>
          
            {isValidating ? 
                <Center>
                    <CircularProgress  isIndeterminate color='yellow.500'/> 
                </Center>
                :
                <Flex flexDir="column" >
                     {userConnections.userProfiles.map((connectionProfile,index) =>{
                        return <Flex key={index} marginTop="20px" p="5" borderRadius="md"  minWidth="320px" boxShadow="lg"  borderWidth="1px" >
                          <Flex  flexDirection="column" marginLeft="10px" minWidth="320px" maxWidth="100%">
                            <Flex alignItems="center" minWidth="320px">
                              <Avatar size='xl' name={`${connectionProfile.firstName} ${connectionProfile.lastName}`} src={connectionProfile.profileImage} />
                              <Box marginLeft="10px">
                                <Heading size="lg"  lineHeight="short">
                                  {connectionProfile.firstName} {connectionProfile.lastName}
                                </Heading>
                              </Box>
                            </Flex>
                            <Box>
                              <Text marginY="20px" fontSize="lg" fontWeight="semibold" lineHeight="short">
                                  About Me
                              </Text>
                              <Text marginY="5px" minWidth="320px" width="100%">
                               {connectionProfile.aboutMe}
                              </Text>
                          </Box>
                        </Flex>  
                      </Flex>
                      })
                     }

                <Center>
                  <NextLink href="/connect">
                    <Button margin="20px" width="200px" size="lg" colorScheme="yellow" >
                      Connect
                    </Button>
                  </NextLink> 
                </Center>
               
              </Flex>
            }
          </Box>
          
      </VStack>
    </>
  );
}
