import { NextApiRequest, NextApiResponse } from "next";
import { getSession, Session, UserProfile } from '@auth0/nextjs-auth0';

import { createOrUpdateUser, deleteUser, getUserByEmail , updateUser, UserProfileResult  } from "../../lib/services/UserProfileSerivce";

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
    const session: Session = getSession(req,res);
    const sessionExpired: boolean = session.accessTokenExpiresAt - (Math.round(Date.now()/1000)) < 1 ? true : false;

    if(req.method === "GET"){
        const result= await getUserByEmail(session.user.email);
        return res.status(200).json(result)
    }

    if(req.method === "POST"){
        if(session.user.email != req.body.email && sessionExpired) return res.status(401).json({});
        
        const result = await createOrUpdateUser(req.body)
        return res.status(200).json(result);
    }

    if(req.method === "PUT"){
        const result = await updateUser(req.body)
        return res.status(200).json(result);
    }

    if(req.method === "DELETE"){
        
        if(!session) return res.status(401).json({});
        if(session.user.email != req.body.email && sessionExpired) return res.status(401).json({});
        
        const result = await deleteUser(req.body)
        return res.status(200).json(result);

    }

    return res.status(400).json({status: "Invalid Request"});
}