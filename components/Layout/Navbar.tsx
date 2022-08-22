import {
  Avatar,
  Button,
  Flex, Heading, Spacer, useDisclosure,
} from "@chakra-ui/react";
import NextLink from "next/link";

import { useState } from "react";
import { useUser } from '@auth0/nextjs-auth0';



const Navbar = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const {user, error, isLoading} = useUser(); //TODO: Check sign in

    return (
      <>
          <Flex maxWidth="1440px" width="100%" backgroundColor="" marginTop="20px"  alignItems="center">
            <NextLink href="/">
                <Button colorScheme="yellow" fontWeight="bold" size="lg">
                  Lighthouse
                </Button>
            </NextLink>
            <Spacer/>
            <NextLink href="/connect">
              <Button marginX="5px" size="lg" variant="ghost" >
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
                <Button marginX="5px" as="a" size="lg" variant="outline" colorScheme="yellow">
                  Login
                </Button>
              }
            </NextLink>

          </Flex>
      </>
    );
  };

export default Navbar;