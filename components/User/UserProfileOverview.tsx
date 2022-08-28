import { Center, Heading,Avatar, Text,Box, Flex, Textarea, Select, Checkbox, Input, InputGroup, InputLeftAddon, Button, FormControl, FormLabel,  Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon, } from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from "next/router";
import {  useUser } from "@auth0/nextjs-auth0";
import { Calendar, Industry, UserProfile } from "@prisma/client";
import { pascalCase } from "pascal-case";
import { useFormik } from "formik";
import * as Yup from "yup";

import { AFFINITY_TAGS_META, JOB_TITLES, ABOUT_ME_META, CHAT_TOPICS } from "../../lib/util/constants";
import { getUserByEmail } from "../../lib/services/UserProfileSerivce";

type UserProfileOverviewProps = {
    profile?: UserProfile,
    editMode?: Boolean,
}


const UserSetup = ({profile}: UserProfileOverviewProps) =>{

    const {user, error} = useUser();
    const router = useRouter();
    const [userProfile, setUserProfile] = useState<UserProfile>(profile);

    const formik = useFormik({
        initialValues:{
            firstName: user.given_name,
            lastName: user.family_name,
            email: userProfile.email,
            aboutMe: userProfile.aboutMe,
            currentJobTitle: userProfile.currentJobTitle,
            profileImage: userProfile.profileImage,
            mentor: userProfile.mentor,
            seekingMentorship: userProfile.seekingMentorship,
            affinity: userProfile.affinity,
            chatTopics: userProfile.chatTopics,
            industry: null,
            linkedinLink: userProfile.linkedinLink,
            twitterLink: userProfile.twitterLink,
            calendarType: Calendar.Google,
            calendarLink: userProfile.calendarLink,
            joinedDate: userProfile.joinedDate,
            publicProfile: true
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required(""),
            lastName:Yup.string().required(""),
            email: Yup.string().required(""),
            aboutMe: Yup.string().required("").max(600,"Maximum of 600 characater required").min(20,"Minimum of 20 characters required"),
            currentJobTitle: Yup.string().optional(""),
            profileImage:  Yup.string().required(""),
            mentor:  Yup.bool().optional(),
            seekingMentorship: Yup.bool().optional(),
            affinity: Yup.array().optional(),
            chatTopics: Yup.array().optional(),
            linkedinLink: Yup.string().optional(),
            twitterLink: Yup.string().optional(),
            calendarLink: Yup.string().optional(),
            publicProfile: Yup.bool().required("")
        }),
        onSubmit: async (values,actions) =>{
            const result = await createUserProfile();

        }
    })
    
    const createUserProfile = async () =>{
        console.log(formik.values)
        const response = await fetch('/api/user', 
        {
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formik.values)
        })

        const body = await response.json();
        

    }


    
    return <>
        <Center  width="100%" maxWidth="1080px">
            <Flex   as="form" onSubmit={formik.handleSubmit}  flexDir={"column"} borderRadius="md"  minWidth="350px" boxShadow="lg"  borderWidth="1px" padding="20px"  maxWidth="1080px">
                    <Center>
                        <Heading size="lg">Account</Heading>
                    </Center>
                    <Center marginTop="10px">
                        <Avatar size='xl' name={`${formik.values.firstName} ${formik.values.lastName}`} src={formik.values.profileImage} />
                    </Center>
                    <Center marginTop="10px">
                        <Button onClick={(e)=> {e.preventDefault(); router.push("/api/auth/logout")}}  width="150px">Logout</Button>
                    </Center>

                    <Text marginTop="20px" fontSize="lg" fontWeight="semibold" lineHeight="short">
                        Name
                    </Text>
                    
                    <Text>
                        {`${formik.values.firstName} ${formik.values.lastName}`}
                    </Text>

                    <FormControl marginTop="10px">
                        <FormLabel>About Me</FormLabel>
                        <Textarea 
                        name="aboutMe"
                        minWidth="350px" 
                        width="100%"
                        minHeight="150px"
                        height="100%"
                        value={formik.values.aboutMe} 
                        onChange={formik.handleChange}
                        placeholder='Give a short intro about yourself your background and what you do now.'/>
                        
                        {/* <Text marginTop="20px" fontSize="lg" fontWeight="semibold" lineHeight="short">
                            Current Job Title
                        </Text>
                        <Select id="currentJobTile" name="currentJobTitle" value={formik.values.currentJobTitle} onChange={formik.handleChange}>
                            {JOB_TITLES.map(jobTitle => <option  id="currentJobTile" key={jobTitle} value={jobTitle}>{jobTitle}</option>)}
                        </Select> */}

                        {/* <Text marginTop="20px" fontSize="lg" fontWeight="semibold" lineHeight="short">
                            Would you like to be listed as a mentor?
                        </Text>
                        <Checkbox>Yes, I am a mentor. </Checkbox> */}

                        <Text marginTop="20px" fontSize="lg" fontWeight="semibold" lineHeight="short">
                            Booking Link
                        </Text>
                        <Text >
                            Please create or provide your Calendly or Google Booking Page.   
                        </Text>
                        <Input
                            name="calendarLink" 
                            onChange={formik.handleChange}
                            value={formik.values.calendarLink}
                            placeholder='Example: https://calendly.com/meet-nicu/office-hours'
                         />

                        {/* TODO: Add affinity */}
                        {/* <Text marginTop="20px" fontSize="lg" fontWeight="semibold" lineHeight="short">
                            Affinity (Optional)
                        </Text> */}
                        {/* {AFFINITY_TAGS_META.map(affinity =>{
                            return <Checkbox key={affinity.affinityName} size={"lg"}>{affinity.affinityName}</Checkbox>
                        })} */}

                        {/* TODO: Add Chat topics */}
                        {/* <Text marginTop="20px" fontSize="lg" fontWeight="semibold" lineHeight="short">
                            Choose up to 5 topics to chat about:
                        </Text>
                        <Select placeholder="Choose a topic">
                            {CHAT_TOPICS.map((chatTopic) =>{
                                return <option value={pascalCase(chatTopic)}>{chatTopic}</option>
                            })}
                        </Select> */}

                        <Text marginTop="20px" fontSize="lg" fontWeight="semibold" lineHeight="short">
                            Social Links
                        </Text>
                        <Flex marginY="10px"alignItems="center">
                          <Text width="100%">https://www.linkedin.com/in/</Text>
                          <Input value={formik.values.linkedinLink} placeholder='Example: nicuparente' />
                        </Flex>
                        <Flex alignItems="center" >
                          <Text width="100%">https://www.twitter.com/</Text>
                          <Input  value={formik.values.twitterLink} placeholder='Example: nicuparente' />
                        </Flex>

                        {/* TODO: add validation on publish */}
                        {/* <Checkbox marginTop="10px" defaultChecked>Publish Profile</Checkbox> */}

                        <Flex marginY="20px" width="100%" justifyContent="space-around">
                            <Button type="submit" colorScheme="yellow" width="150px">Save</Button>
                        </Flex>
                    </FormControl>

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