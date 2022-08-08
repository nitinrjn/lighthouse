import { Button, Center, Divider, Flex, Text } from "@chakra-ui/react"
import NextLink from "next/link";

const Foooter = (props) =>{
 return <>
    <Divider/>
    <Center minWidth="100%">
        <Flex  alignItems="center" minHeight="100px" marginY="10px">
            <NextLink href="/about">
                <Button variant="ghost">
                    About
                </Button>
            </NextLink>
            <NextLink href="/resources">
                <Button variant="ghost">
                    Resources
                </Button>
            </NextLink>

            <Button variant="ghost">
                GitHub
            </Button>
        </Flex>
        
    </Center>
    <Text textAlign="center">
              Lighthouse Mentorship
    </Text>
 </>
}

export default Foooter