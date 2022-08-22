import { NextApiRequest, NextApiResponse } from "next";
import { getSession, Session, UserProfile } from '@auth0/nextjs-auth0';

import { getUserByEmail, createUser } from "../../lib/service/UserProfileSerivce";

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
    const session: Session = getSession(req,res);

    if(req.method == "GET"){
        const userProfile = await getUserByEmail(session.user.email);
        return res.status(200).json({userProfile: userProfile})
    }

    if(req.method == "POST"){
        console.log(session)

        const userProfile = await createUser(req.body)
    }
    
    return res.status(400).json({status: "Invalid Request"})
}