import { Center, Heading,Avatar, Text,Box, Flex, Textarea, Select, Checkbox, Input, InputGroup, InputLeftAddon, Button, FormControl, FormLabel,  Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    VStack,
    FormErrorMessage, } from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from "next/router";
import {  useUser } from "@auth0/nextjs-auth0";
import { Calendar, Industry, UserProfile } from "@prisma/client";
import { pascalCase } from "pascal-case";
import { useFormik } from "formik";
import * as Yup from "yup";

import { AFFINITY_TAGS_META, JOB_TITLES, ABOUT_ME_META, CHAT_TOPICS } from "../../lib/util/constants";

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
            email: user.email,
            aboutMe: userProfile?.aboutMe || "",
            currentJobTitle: userProfile?.currentJobTitle || "",
            profileImage: user.picture,
            mentor: userProfile?.mentor || false,
            seekingMentorship: userProfile?.seekingMentorship || false,
            affinity: userProfile?.affinity || [],
            chatTopics: userProfile?.chatTopics || [],
            industry: userProfile?.industry ||  null,
            linkedinLink: userProfile?.linkedinLink || "",
            twitterLink: userProfile?.twitterLink || "",
            calendarType: userProfile?.calendarType || Calendar.Calendly,
            calendarLink: userProfile?.calendarLink || "",
            publicProfile: true
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required(""),
            lastName:Yup.string().required(""),
            email: Yup.string().required(""),
            aboutMe: Yup.string().required("About Me section is required. Minimum characters 20. Maximum 600.").max(600,"Maximum of 600 characater required").min(20,"Minimum of 20 characters required"),
            // currentJobTitle: Yup.string().optional(),
            // profileImage:  Yup.string().required(""),
            // mentor:  Yup.bool().optional(),
            // seekingMentorship: Yup.bool().optional(),
            // affinity: Yup.array().optional(),
            // chatTopics: Yup.array().optional(),
            linkedinLink: Yup.string().matches(/\S+linkedin\.com\/in\/\w+/, "Invalid format must be similar to https://www.linkedlin.com/in/nicuparente").optional(),
            twitterLink: Yup.string().matches(/\S+twitter\.com\/\w+/, "Invalid format must be similar to https://www.twitter.com/nicuparente").optional(),
            calendarLink: Yup.string().matches(/\S+calendly\.com\/\w+/, "Invalid format must be similar to https://calendly.com/meet-nicu/office-hours").optional(),
            // publicProfile: Yup.bool().optional()
        }),
        onSubmit: async (values,actions) =>{

            const result = await createUserProfile();
            console.log(result)
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

        alert(response.json());

        const body = await response.json();
        

    }
    
    return <>
        <Center  width="100%" maxWidth="1080px">
            <VStack 
                as="form"
                onSubmit={formik.handleSubmit}
                borderRadius="md" 
                boxShadow="lg" 
                borderWidth="1px" 
                padding="20px" 
                width="100%" 
                maxWidth="1080px">
                    <Center>
                        <Heading size="lg">Account</Heading>
                    </Center>
                    <Center marginTop="10px">
                        <Avatar size='xl' name={`${formik.values.firstName} ${formik.values.lastName}`} src={formik.values.profileImage} />
                    </Center>
                    <Center marginTop="10px">
                        <Button onClick={(e)=> {e.preventDefault(); router.push("/api/auth/logout")}}  width="150px">Logout</Button>
                    </Center>

                    <Text width="100%" marginTop="20px" fontSize="lg" fontWeight="semibold" lineHeight="short">
                        Name
                    </Text>
                    
                    <Text width="100%">
                        {`${formik.values.firstName} ${formik.values.lastName}`}
                    </Text>

                    <Text width="100%" marginTop="20px" fontSize="lg" fontWeight="semibold" lineHeight="short">
                        Email
                    </Text>
                    
                    <Text width="100%">
                        {`${formik.values.email}`}
                    </Text>

                    <FormControl marginTop="10px" isInvalid={formik.errors.aboutMe && formik.touched.aboutMe}>
                        <FormLabel>About Me</FormLabel>
                        <Textarea 
                        name="aboutMe"
                        minWidth="350px" 
                        width="100%"
                        minHeight="150px"
                        height="100%"
                        {...formik.getFieldProps("aboutMe")} //Handles the onChange, value, onBlur
                        placeholder='Give a short intro about yourself, your background or what you want to discuss with others!'/>
                        <FormErrorMessage>{formik.errors.aboutMe}</FormErrorMessage>
                    </FormControl>

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
                    <FormControl isInvalid={formik.errors.calendarLink && formik.touched.calendarLink}>
                        <Text marginTop="20px" fontSize="lg" fontWeight="semibold" lineHeight="short">
                            Booking Link
                        </Text>
                        <Text >
                            Please create or provide your Calendly   
                        </Text>
                        <Input
                            name="calendarLink" 
                            {...formik.getFieldProps("calendarLink")}
                            placeholder='Example: https://calendly.com/meet-nicu/office-hours'
                         />
                        <FormErrorMessage>{formik.errors.calendarLink}</FormErrorMessage>
                    </FormControl>
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
                    <Text textAlign="left" width="100%" fontSize="lg" fontWeight="semibold" lineHeight="short">
                            Social Links
                    </Text>

                    <Flex width="100%" justifyContent="space-between" flexWrap="wrap" >
                        <FormControl marginY="5px" maxW="500px" isInvalid={formik.errors.linkedinLink && formik.touched.linkedinLink}>
                            <InputGroup>
                                <InputLeftAddon children="LinkedIn"/>
                                <Input 
                                  name="linkedinLink"
                                  {...formik.getFieldProps("linkedinLink")}
                                  placeholder='Example: https://www.linkedin.com/in/nicuparente' />
                            </InputGroup>
                            <FormErrorMessage>{formik.errors.linkedinLink}</FormErrorMessage>
                        </FormControl>   

                        <FormControl marginY="5px" maxW="500px" isInvalid={formik.errors.twitterLink && formik.touched.twitterLink}>
                            <InputGroup>
                                <InputLeftAddon children="Twitter"/>
                                <Input 
                                    name="twitterLink"
                                    {...formik.getFieldProps("twitterLink")}
                                    placeholder='Example: https://www.twitter.com/nicuparente' />
                            </InputGroup>
                            <FormErrorMessage>{formik.errors.twitterLink}</FormErrorMessage>
                        </FormControl>
                    </Flex>
                        {/* TODO: add validation on publish */}
                        {/* <Checkbox marginTop="10px" defaultChecked>Publish Profile</Checkbox> */}

                        <Flex marginY="20px" width="100%" justifyContent="space-around">
                            <Button type="submit" colorScheme="yellow" width="150px">Save</Button>
                        </Flex>
                    
                    <Accordion width="100%" color="red.500" allowToggle>
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
            </VStack>
        </Center>
    </>
}

export default UserSetup;