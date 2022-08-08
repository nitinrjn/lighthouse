import { Button, Center, Divider, Flex, Text } from "@chakra-ui/react"
import NextLink from "next/link";
import { useRouter } from 'next/router'

const Foooter = (props) =>{
    const router = useRouter();
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
               <Button marginX="5px" colorScheme="yellows" variant="link" onClick={(e)=>{e.preventDefault(); router.push("https://github.com/nicuparente/lighthouse")}}>
                   Contribute on GitHub!
               </Button>
           </Flex>

       </Center>
       <Text textAlign="center">
                🚢 Lighthouse Mentorship
       </Text>
    </>
}

export default Foooter