import prisma from "../util/prisma";
import { UserProfile } from "@prisma/client";

export class ConnectionsServiceResult {
    userProfiles: UserProfile[] = [];
    success: boolean = false; 
    error: string = null;
}

export const getConnectionProfiles = async () =>{
    const result = new ConnectionsServiceResult()

    try{
        //Only public profiles
        result.userProfiles = await prisma.userProfile.findMany({where: {
            publicProfile: true
        }});
        result.success = true;
    
    }catch(e){
        
        result.error = e.code;

    }finally{
        return result;
    }
}
