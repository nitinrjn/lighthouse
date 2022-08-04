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
          <Flex  minWidth="100%" alignItems="center">
            <NextLink href="/">
                <Button variant="ghost" size="lg">
                    Lighthouse
                </Button>
            </NextLink>
            <Spacer/>
            <NextLink href="/mentors">
              <Button as="a" size="lg" variant="ghost" colorScheme="black" aria-label="/search" my={5}>
                Mentors
              </Button>
            </NextLink>
            <NextLink href="/resources">
              <Button as="a" size="lg" variant="ghost" colorScheme="black" aria-label="/search" my={5} >
                Resources
              </Button>
            </NextLink>
            <Button as="a" size="lg" colorScheme="yellow"  aria-label="/profile" my={5} onClick={(e) => {e.preventDefault();}}>
              Login
            </Button>

          </Flex>
      </>
    );
  };

export default Navbar;