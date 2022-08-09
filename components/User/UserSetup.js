import { Center, Heading,Avatar, Text, Flex, Textarea, Select, Checkbox, Input, InputGroup, InputLeftAddon, Button } from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from "next/router";

import { AFFINITY_TAGS_META, JOB_TITLES, COMPETENCIES_LIST } from "../../lib/constants";
import { UserSample } from "../../sample/UserSample";

const UserSetup = (props) =>{
    
    const router = useRouter();
    const user = UserSample;

    return <>
        <Center >
            <Flex flexDir={"column"} borderRadius="md"  minWidth="350px" boxShadow="lg"  borderWidth="1px" padding="20px"  maxWidth="1080px">
                    <Center>
                        <Heading size="lg">Account Setup</Heading>
                    </Center>
                    <Center marginTop="10px">
                        <Avatar size='xl' name='Nicu Parente' src='https://www.nicuparente.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FNicu-Headshot.1b9be0ae.jpg&w=828&q=75' />
                    </Center>

                    <Text marginTop="20px" fontSize="lg" fontWeight="semibold" lineHeight="short">
                        Name
                    </Text>
                    <Text>{user.firstName} {user.lastName}</Text>

                    <Text marginTop="20px" fontSize="lg" fontWeight="semibold" lineHeight="short">
                        About Me
                    </Text>
                    <Textarea minWidth="350px" placeholder='Give a short intro about yourself your background and what you do now.'/>
                    
                    <Text marginTop="20px" fontSize="lg" fontWeight="semibold" lineHeight="short">
                        Current Job Title
                    </Text>
                    <Select>
                        {JOB_TITLES.map(jobTitle => <option key={jobTitle} value={jobTitle}>{jobTitle}</option>)}
                    </Select>

                    <Text marginTop="20px" fontSize="lg" fontWeight="semibold" lineHeight="short">
                        Would you like to be listed as a mentor?
                    </Text>
                    <Checkbox>Yes, I am a mentor. </Checkbox>

                    <Text marginTop="20px" fontSize="lg" fontWeight="semibold" lineHeight="short">
                        Booking Link
                    </Text>
                    <Text>
                        Please create or provide your Calendly or Google Booking Page.   
                    </Text>
                    <Input 
                     placeholder='Example: https://calendly.com/meet-nicu/office-hours'
                     />
                     
                    <Text marginTop="20px" fontSize="lg" fontWeight="semibold" lineHeight="short">
                        Affinity (Optional)
                    </Text>
                    {AFFINITY_TAGS_META.map(affinity =>{
                        return <Checkbox key={affinity.affinityName} size={"lg"}>{affinity.affinityName}</Checkbox>
                    })}

                    {/* TODO: Add Competencies */}
                    {/* <Text marginTop="20px" fontSize="lg" fontWeight="semibold" lineHeight="short">
                        Select Top 10 Competencies
                    </Text>
                    <Flex justifyContent="space-between">
                        <Input minWidth="200px"/>
                        <Button marginLeft="10px">Select</Button>
                    </Flex> */}

                    <Text marginTop="20px" fontSize="lg" fontWeight="semibold" lineHeight="short">
                        Social Links
                    </Text>
                    <Flex marginY="10px"alignItems="center">
                      <Text minWidth="20%">LinkedIn</Text>
                      <Input  placeholder='https://www.linkedin.com/in/hello/' />
                    </Flex>
                    <Flex alignItems="center" >
                        <Text minWidth="20%">Twitter</Text>
                      <Input  placeholder='www.twitter.com/hello' />
                    </Flex>

                    <Center marginTop="20px" onClick={(e)=> {e.preventDefault(); router.push('/mentors') }}>
                        <Button colorScheme="yellow" width="200px">Save</Button>
                    </Center>
            </Flex>
        </Center>
    </>
}

export default UserSetup;