import { Heading,Text, VStack, Flex, Box } from "@chakra-ui/react"
import Image from 'next/image'

import LightHouseLogo from '../public/Lighthouse-Connections-Logo.png'

const AboutTextSection = (props) =>{
    return <>
            <Heading marginTop="20px" size="md" textAlign="left" width="100%">
                        {props.heading}
                    </Heading>
            <Text width="100%">{props.text}</Text>
    </>
}

const About = (props) =>{
    return <>
        <Flex minWidth="100%" maxW="1080px" justifyContent="space" alignItems="center" flexWrap="wrap">
            <Image
            src={LightHouseLogo}
            alt="Lighthouse Logo"
            />
            <Flex margin="20px" direction="column" alignItems="center" width="100%" maxWidth="500px" marginX="10px" minHeight="100%">
                <Heading marginY="20px" size="lg">About</Heading>
                <AboutTextSection 
                    heading="What is Lighthouse?"
                    text="Lighthouse makes it easier for people from various backgrounds to spark meaningful conversations and share their unique experiences and insights."
                />
                <AboutTextSection
                    heading="Is Lighthouse free?"
                    text="Yes! In fact its open source. You can create your instance of it for your community."
                />
            </Flex>
        </Flex>
    </>
}

export default About;