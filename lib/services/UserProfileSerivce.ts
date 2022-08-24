import prisma from "../util/prisma";
import { UserProfile } from "@prisma/client";


export const getUserByEmail = async (email:string) =>{
    const userProfile : UserProfile = await prisma.userProfile.findUnique({
        where: {
            email: email
        }
    })
    
    return userProfile;
}

export const createUser = async (userProfile: UserProfile) =>{
    const result = {
        userProfile: null,
        success: false,
        error: null
    }
    
    try{
        result.userProfile = await prisma.userProfile.create({
            data: {...userProfile}
        })
        result.success = result.userProfile != null ? true : false;
    }
    catch(e){
        console.log(`ERROR encountered PrismaCode=${e.code}`);
        result.error = e.code
    }
    finally{
        return result;
    }
}