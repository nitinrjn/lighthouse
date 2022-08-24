import { NextApiRequest, NextApiResponse } from "next";
import { getSession, Session, UserProfile } from '@auth0/nextjs-auth0';

import { getUserByEmail, createUser } from "../../lib/services/UserProfileSerivce";

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
    const session: Session = getSession(req,res);

    if(req.method == "GET"){
        const userProfile = await getUserByEmail(session.user.email);
        return res.status(200).json({userProfile: userProfile})
    }

    if(req.method == "POST"){
        const result = await createUser(req.body)
        console.log(result)
        return res.status(200).json(result);
    }
    return res.status(400).json({status: "Invalid Request"});
}