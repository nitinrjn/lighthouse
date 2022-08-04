import { Button, Center, Divider, Flex, Text } from "@chakra-ui/react"

const Foooter = (props) =>{
 return <>
    <Divider/>
    <Center minWidth="100%">
        <Flex  alignItems="center" minHeight="100px" marginY="10px">
            <Button variant="ghost">
                About
            </Button>

            <Button variant="ghost">
                GitHub
            </Button>
        </Flex>
        
    </Center>
    <Text textAlign="center">
                Made with ❤️ | Copyright 2022 
    </Text>
 </>
}

export default Foooter