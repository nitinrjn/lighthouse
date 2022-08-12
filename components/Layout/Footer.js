import { Box, Button, Center, Divider, Flex, Text } from "@chakra-ui/react"
import NextLink from "next/link";
import { useRouter } from 'next/router'

const Foooter = (props) =>{
    const router = useRouter();
    return <Box marginTop="50px" backgroundColor="#1a202c" height="50vh" maxHeight="400px">
       <Divider/>
       <Center minWidth="100%">
           <Flex  alignItems="center" minHeight="100px" marginY="10px">
               <NextLink href="/about">
                   <Button marginX="10px" variant="link" color="white">
                       About  
                   </Button>
               </NextLink>

               <NextLink marginX="10px" href="/resources">
                   <Button variant="link" color="white">
                       Resources 
                   </Button>
               </NextLink>  
               
               <Button marginX="10px" color="yellow.300" variant="link" onClick={(e)=>{e.preventDefault(); router.push("https://github.com/nicuparente/lighthouse")}}>
                   Contribute on GitHub!
               </Button>
           </Flex>

       </Center>
       <Text textColor="white" textAlign="center">
                🚢 Lighthouse Connection
       </Text>
    </Box>
}

export default Foooter