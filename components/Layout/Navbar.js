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
          <Flex backgroundColor="" marginY="15px" minWidth="100%" alignItems="center">
            <NextLink href="/">
                <Button colorScheme="yellow" fontWeight="bold" size="lg">
                  Lighthouse
                </Button>
            </NextLink>
            <Spacer/>
            <NextLink href="/mentors">
              <Button marginX="5px" size="lg" variant="ghost" >
                Mentors
              </Button>
            </NextLink>
            <NextLink href="/guide">
              <Button marginX="5px"  as="a" size="lg" variant="ghost" >
                Guide
              </Button>
            </NextLink>
            
            {isLoggedIn? 
              <Avatar size='md' marginX="5px" name='Nicu Parente' src='https://www.nicuparente.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FNicu-Headshot.1b9be0ae.jpg&w=828&q=75' />
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