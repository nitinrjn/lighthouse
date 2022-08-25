import { NextApiRequest, NextApiResponse } from "next";
import { getSession, Session, UserProfile } from '@auth0/nextjs-auth0';

import { getConnectionProfiles } from "../../lib/services/ConnectionsService";

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
    const session: Session = getSession(req,res);
    
    console.log(session.accessToken)

    if(req.method === "GET"){
        const result= await getConnectionProfiles();
        return res.status(200).json(result)
    }
    
    return res.status(405).json({status: "Invalid Request"});
}