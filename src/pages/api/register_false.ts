import { NextApiRequest, NextApiResponse } from 'next';
import prismadb from '../../../lib/prismadb';
import bcrypt from 'bcrypt';

import { PrismaClient } from '@prisma/client';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const prisma = new PrismaClient();

    const user = await prisma.user.create({
        req,
    });

    return user;
}

// your Register component code ...

// rest of your Register component code ...
