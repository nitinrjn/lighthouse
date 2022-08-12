import {
  Avatar,
  Button,
  Flex, Heading, Spacer, useDisclosure,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useState } from "react";



const Navbar = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const isLoggedIn = true; //TODO: Check sign in
    const [isSignShowing, setIsSignInShowing] = useState(false);

    return (
      <>
          <Flex backgroundColor="" marginTop="10px" minWidth="100%" alignItems="center">
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
            
            {isLoggedIn? 
              <NextLink href="/setup">
                <Avatar size='md' marginX="5px" name='Nicu Parente' />
              </NextLink>
            :
              <Button marginX="5px" as="a" size="lg" variant="outline" colorScheme="yellow" onClick={(e) => {e.preventDefault();}}>
                Login
              </Button>
            }
          </Flex>
      </>
    );
  };

export default Navbar;