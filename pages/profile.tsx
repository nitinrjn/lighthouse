import { getSession, withPageAuthRequired } from '@auth0/nextjs-auth0';

import UserProfileOverview from "../components/User/UserProfileOverview";
import { UserProfile } from '@prisma/client';
import {  Center, CircularProgress } from '@chakra-ui/react';
import { getUserByEmail } from '../lib/services/UserProfileSerivce';
import useSWR from 'swr';


const fetcher = (url: string) => fetch(url).then(res => res.json());



const Setup = (props) =>{
    const { data: data, isValidating, error } = useSWR('/api/user', fetcher);


    return <Center minWidth="100vw">
            {
                isValidating ? 
                <Center>
                    <CircularProgress  isIndeterminate color='yellow.500'/> 
                </Center>
                :
                <UserProfileOverview  profile={data.userProfile}/>
            
            }
            
    </Center>
}

export default withPageAuthRequired(Setup);