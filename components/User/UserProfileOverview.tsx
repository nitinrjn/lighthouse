import { Center, Heading,Avatar, Text, Flex, Textarea, Select, Checkbox, Input, InputGroup, InputLeftAddon, Button, FormControl, FormLabel } from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0";
import { Calendar, Industry, UserProfile } from "@prisma/client";

import { AFFINITY_TAGS_META, JOB_TITLES, ABOUT_ME_META } from "../../lib/util/constants";
import { UserSample } from "../../prisma/sampleData";

type UserProfileOverviewProps = {
    profile?: UserProfile,
    editMode?: Boolean,
}


const UserSetup = ({profile}: UserProfileOverviewProps) =>{

    const {user, error} = useUser();
    const router = useRouter();
    const [userProfile, setUserProfile] = useState<UserProfile>(profile);

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
            body: JSON.stringify({
                firstName: user.given_name,
                lastName: user.family_name,
                email: user.email,
                aboutMe: "I have over 8+ years of experience working in big tech companies as a software engineer and product manager. Prior to being in tech, I was a Grunt in the US Army for 10+ years combined from active duty and the National Guard.",
                currentJobTitle: "Product Manager",
                profileImage: user.picture,
                mentor: true,
                seekingMentorship: true,
                affinity: ["MilitaryVeteran"],
                industry: Industry.TECHNOLOGY,
                linkedinLink: "www.linkedin.com/nicuparente",
                twitterLink: "www.twitter.com/nicuparente",
                calendarType: Calendar.GOOGLE,
                calendarLink: "https://calendar.app.google/nAszwHWx3tHYS8MY8",
                joinedDate: undefined,
                publicProfile: false
            })
        })

        const body = await response.json()

    }
    
    return <>
        <Center >
            <Flex flexDir={"column"} borderRadius="md"  minWidth="350px" boxShadow="lg"  borderWidth="1px" padding="20px"  maxWidth="1080px">
                    <Center>
                        <Heading size="lg">Account Setup</Heading>
                    </Center>
                    <Center marginTop="10px">
                        <Avatar size='xl' name={`${user.given_name} ${user.family_name}`} src={user.picture} />
                    </Center>

                    <Text marginTop="20px" fontSize="lg" fontWeight="semibold" lineHeight="short">
                        Name
                    </Text>
                    
                    <Text>
                        {`${user.given_name} ${user.family_name}`}
                    </Text>

                    <FormControl>
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

                    <Center marginTop="20px" onClick={(e)=> {e.preventDefault(); router.push('/connect') }}>
                        <Button colorScheme="yellow" width="200px">Save</Button>
                    </Center>
                    <Center marginTop="20px" onClick={createUserProfile}>
                        <Button colorScheme="yellow" width="200px">create</Button>
                    </Center>
            </Flex>
        </Center>
    </>
}

export default UserSetup;