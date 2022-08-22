import { UserProfile } from "@auth0/nextjs-auth0";
import prisma from "../../lib/prisma";


export const getUserByEmail = async (email:string) =>{
    const userProfile : UserProfile = await prisma.userProfile.findUnique({
        where: {
            email: email
        }
    })
    
    return userProfile;
}

export const createUser = async (userProfile: UserProfile) =>{
    let result;
    try{
        result = await prisma.userProfile.create({
            data: {...userProfile}
        })
    
    }
    catch(e){
        console.log(e)
    }
    return 
}