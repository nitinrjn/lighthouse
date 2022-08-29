import { NextApiRequest, NextApiResponse } from "next";
import { getSession, Session, UserProfile } from '@auth0/nextjs-auth0';

import { createOrUpdateUser, deleteUser, getUserByEmail , updateUser, UserProfileResult  } from "../../lib/services/UserProfileSerivce";

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
    const session: Session = getSession(req,res);
    
    if(req.method === "GET"){
        const result= await getUserByEmail(session.user.email);
        return res.status(200).json(result)
    }

    if(req.method === "POST"){
        const result = await createOrUpdateUser(req.body)
        return res.status(200).json(result);
    }

    if(req.method === "PUT"){
        const result = await updateUser(req.body)
        return res.status(200).json(result);
    }

    if(req.method === "DELETE"){
        const result = await updateUser(req.body)
        return res.status(200).json(result);

    }

    return res.status(400).json({status: "Invalid Request"});
}