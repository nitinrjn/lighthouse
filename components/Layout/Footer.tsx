import { Box, Button, Center, Divider, Flex, Text } from "@chakra-ui/react"
import NextLink from "next/link";
import { useRouter } from 'next/router'

const Foooter = (props) =>{
    const router = useRouter();
    return <Box width="100%" marginTop="50px" backgroundColor="#1a202c" height="20vh" >
       <Center minWidth="100%">
           <Flex  alignItems="center" minHeight="100px">
               <NextLink href="/about">
                   <Button marginX="10px" variant="link" color="white">
                       About  
                   </Button>
               </NextLink>

               <NextLink href="/resources">
                   <Button marginX="10px" variant="link" color="white">
                       Resources 
                   </Button>
               </NextLink>  
               
               <Button marginX="10px" color="yellow.300" variant="link" onClick={(e)=>{e.preventDefault(); router.push("https://github.com/nicuparente/lighthouse")}}>
                   Open Source on GitHub!
               </Button>
           </Flex>

       </Center>
       <Text textColor="white" textAlign="center">
                🚢 Lighthouse Connections
       </Text>
    </Box>
}

export default Foooter