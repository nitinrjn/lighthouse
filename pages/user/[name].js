import { useRouter } from 'next/router'



function User(){
    const router = useRouter();
    const {name} = router.query
    return <>
        Hello {name}!
    </>
}

export default User;