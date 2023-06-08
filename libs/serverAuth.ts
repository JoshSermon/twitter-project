import { NextApiRequest } from "next";
import { getSession } from 'next-auth/react';

const serverAuth = async( req: NextApiRequest) => {
    const session = await getSession({ req });

    if(!session?.user?.email) {
        throw new Error('Not signed in');
    }

}

// Stopped at 1:32:00 - June 8th, 2023