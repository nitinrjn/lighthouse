import { GetServerSideProps } from 'next';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import useSWR from 'swr';

import UserProfileOverview from "../components/User/UserProfileOverview";
import { UserProfile } from '@prisma/client';
import { Center } from '@chakra-ui/react';


const fetcher = (url: string) => fetch(url).then(res => res.json());


const Setup = () =>{
    const { data: user, isValidating, error } = useSWR('/api/user', fetcher);
    
    return <Center minWidth="100vw">
            <UserProfileOverview />

    </Center>
}

export default withPageAuthRequired(Setup);