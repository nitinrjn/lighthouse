import {
  Avatar,
  Box,
  Button,
  Center,
  Flex, Heading, Spacer, useDisclosure,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";

import { useState } from "react";
import { useUser } from '@auth0/nextjs-auth0';



const Navbar = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const {user, error, isLoading} = useUser();

    return (
      <Box width="100%" backgroundColor="#1a202c"maxHeight="400px">

         <Center>
         <Flex padding="10px" maxWidth="1440px" width="100%" alignItems="center">
            <NextLink href="/">
                <Button colorScheme="yellow" fontWeight="bold" size="lg">
                  Lighthouse
                </Button>
            </NextLink>
            <Spacer/>
            <NextLink href="/connect">
              <Button marginX="20px" size="lg" variant="ghost" colorScheme="whiteAlpha" color="white" >
                Connect
              </Button>
            </NextLink>
            {/* <NextLink href="/guide">
              <Button marginX="5px"  as="a" size="lg" variant="ghost" >
                Guide
              </Button>
            </NextLink> */}
            <NextLink href="/profile">
              {user? 
                  <Avatar size='md' marginX="5px" name='Nicu Parente' src={user.picture} />
              :
                <Button marginX="5px" as="a" size="lg" colorScheme="yellow">
                  Login
                </Button>
              }
            </NextLink>
          </Flex> 
         </Center>
      </Box>
    );
  };

export default Navbar;