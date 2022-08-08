import {
  Button,
  Flex, Heading, Spacer, useDisclosure,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useState } from "react";



const Navbar = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const {isSignShowing, setIsSignInShowing} = useState(false);

    return (
      <>
          <Flex backgroundColor="" marginY="15px" minWidth="100%" alignItems="center">
            <NextLink href="/">
                <Button colorScheme="yellow" size="lg">
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
            
            <Button marginX="5px" as="a" size="lg" variant="outline" colorScheme="yellow" onClick={(e) => {e.preventDefault();}}>
              Login
            </Button>

          </Flex>
      </>
    );
  };

export default Navbar;