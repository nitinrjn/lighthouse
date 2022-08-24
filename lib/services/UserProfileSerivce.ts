import prisma from "../util/prisma";
import { UserProfile } from "@prisma/client";

class UserProfileResult {
    userProfile: UserProfile = null;
    success: boolean = false; 
    error: string = "";
}

export const getUserByEmail = async (email:string) =>{
    const result: UserProfileResult = new UserProfileResult();

    try{
        result.userProfile = await prisma.userProfile.findUnique({
            where: {
                email: email
            }
        })
        result.success = result.userProfile != null ? true : false;
    }
    catch(e){
        result.error = e.code

    }

    return result;
}

export const createUser = async (userProfile: UserProfile) =>{
    const result: UserProfileResult = new UserProfileResult();

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

export const updateUser = async(userProfile: UserProfile) =>{
    const result: UserProfileResult = new UserProfileResult();

    try {
        result.userProfile = await prisma.userProfile.update({
            where: {
                email: userProfile.email
            },
            data: {...userProfile}
        })
    }catch(e){
        console.log(`ERROR encountered PrismaCode=${e.code}`);
        result.error = e.code
    }
    finally{
        return result;
    }
}

export const deleteUser = async(userProfile: UserProfile) =>{
    const result: UserProfileResult = new UserProfileResult();

    try {
        result.userProfile = await prisma.userProfile.delete({
            where: {
                email: userProfile.email
            }
        })
    }catch(e){
        console.log(`ERROR encountered PrismaCode=${e.code}`);
        result.error = e.code
    }
    finally{
        return result;
    }
}