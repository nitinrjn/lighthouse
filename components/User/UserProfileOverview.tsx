import { Center, Heading,Avatar, Text,Box, Flex, Textarea, Select, Checkbox, Input, InputGroup, InputLeftAddon, Button, FormControl, FormLabel,  Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon, } from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0";
import { Calendar, Industry, UserProfile } from "@prisma/client";
import { pascalCase } from "pascal-case";

import { AFFINITY_TAGS_META, JOB_TITLES, ABOUT_ME_META, CHAT_TOPICS } from "../../lib/util/constants";

type UserProfileOverviewProps = {
    profile?: UserProfile,
    editMode?: Boolean,
}


const UserSetup = ({profile}: UserProfileOverviewProps) =>{

    const {user, error} = useUser();
    const router = useRouter();
    const [userProfile, setUserProfile] = useState<UserProfile>({
        firstName: user.given_name,
        lastName: user.family_name,
        email: "nicupaaaaaaraente@gmail.com",
        aboutMe: "I have over 8+ years of experience working in big tech companies as a software engineer and product manager. Prior to being in tech, I was a Grunt in the US Army for 10+ years combined from active duty and the National Guard.",
        currentJobTitle: "Product Manager",
        profileImage: user.picture,
        mentor: true,
        seekingMentorship: true,
        affinity: ["MilitaryVeteran"],
        chatTopics: ["CareerTransition",],
        industry: Industry.Technology,
        linkedinLink: "www.linkedin.com/nicuparente",
        twitterLink: "www.twitter.com/nicuparente",
        calendarType: Calendar.Google,
        calendarLink: "https://calendly.com/meet-nicu/office-hours",
        joinedDate: undefined,
        publicProfile: true
    });

    const [isEditMode, setIsEditMode] = useState<Boolean>(userProfile == undefined ? true : false);

    //AboutMe Content
    const [aboutMe, setAboutMe] = useState('')
    const [isAboutMeValid, setIsAboutMeValid] = useState(false);
    const [aboutMeLength, setAboutMeLength] = useState(0);


    const handleAboutMeOnChange = (event) => {
        const val = event.target.value;
        setAboutMeLength(val.length);
    
        if(val.length <= ABOUT_ME_META.MAX_LENGTH && val.length >= ABOUT_ME_META.MIN_LENGTH ){
          setIsAboutMeValid(true)
        }else{
           setIsAboutMeValid(false)
        }
        setAboutMe(event.target.value)
      }

    
    const createUserProfile = async () =>{


        //Validate Info 
        
        const response = await fetch('/api/user', 
        {
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userProfile)
        })

        const body = await response.json()

    }
    
    return <>
        <Center width="100%" maxWidth="1080px">
            <Flex flexDir={"column"} borderRadius="md"  minWidth="350px" boxShadow="lg"  borderWidth="1px" padding="20px"  maxWidth="1080px">
                    <Center>
                        <Heading size="lg">Account Setup</Heading>
                    </Center>
                    <Center marginTop="10px">
                        <Avatar size='xl' name={`${user.given_name} ${user.family_name}`} src={user.picture} />
                    </Center>
                    <Center marginTop="10px">
                        <Button onClick={createUserProfile}  width="150px">Logout</Button>
                    </Center>

                    <Text marginTop="20px" fontSize="lg" fontWeight="semibold" lineHeight="short">
                        Name
                    </Text>
                    
                    <Text>
                        {`${user.given_name} ${user.family_name}`}
                    </Text>

                    <FormControl marginTop="10px">
                        <FormLabel>About Me</FormLabel>
                        <Textarea 
                        minWidth="350px" 
                        value={aboutMe} 
                        isInvalid={!isAboutMeValid} 
                        onChange={handleAboutMeOnChange}
                        placeholder='Give a short intro about yourself your background and what you do now.'/>
                    
                    </FormControl>

                    <Text marginTop="20px" fontSize="lg" fontWeight="semibold" lineHeight="short">
                        Current Job Title
                    </Text>
                    <Select>
                        {JOB_TITLES.map(jobTitle => <option key={jobTitle} value={jobTitle}>{jobTitle}</option>)}
                    </Select>

                    {/* <Text marginTop="20px" fontSize="lg" fontWeight="semibold" lineHeight="short">
                        Would you like to be listed as a mentor?
                    </Text>
                    <Checkbox>Yes, I am a mentor. </Checkbox> */}

                    <Text marginTop="20px" fontSize="lg" fontWeight="semibold" lineHeight="short">
                        Booking Link
                    </Text>
                    <Text>
                        Please create or provide your Calendly or Google Booking Page.   
                    </Text>
                    <Input 
                     placeholder='Example: https://calendly.com/meet-nicu/office-hours'
                     />
                     
                    {/* <Text marginTop="20px" fontSize="lg" fontWeight="semibold" lineHeight="short">
                        Affinity (Optional)
                    </Text> */}
                    {/* {AFFINITY_TAGS_META.map(affinity =>{
                        return <Checkbox key={affinity.affinityName} size={"lg"}>{affinity.affinityName}</Checkbox>
                    })} */}

                    {/* TODO: Add Competencies */}
                    <Text marginTop="20px" fontSize="lg" fontWeight="semibold" lineHeight="short">
                        Choose up to 10 Topics
                    </Text>
                    <Select placeholder="Choose a topic">
                        {CHAT_TOPICS.map((chatTopic) =>{
                            return <option value={pascalCase(chatTopic)}>{chatTopic}</option>
                        })}
                    </Select>

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

                    <Flex marginY="20px" width="100%" justifyContent="space-around">
                        <Button onClick={createUserProfile} colorScheme="yellow" width="150px">Save</Button>
                    </Flex>
                    
                    <Accordion color="red.500" allowToggle>
                        <AccordionItem>
                          <h2>
                            <AccordionButton>
                              <Box  flex='1' textAlign='left'>
                                Delete Account
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel>
                            <Flex flexDir="column" alignItems="center" width="100%" height={"100px"} justifyContent="space-around" >
                                <Text >Warning: All your data will be lost when you delete your account</Text>
                                <Button variant="outline" width="200px" onClick={(e) => {e.preventDefault}} colorScheme="red">Delete Account</Button>
                            </Flex>
                          </AccordionPanel>
                        </AccordionItem>
                    </Accordion>

            </Flex>
        </Center>
    </>
}

export default UserSetup;