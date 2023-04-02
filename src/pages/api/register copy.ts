// import { NextApiRequest, NextApiResponse } from 'next';
// import prismadb from '../../../lib/prismadb';
// import bcrypt from 'bcrypt';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//     if (req.method !== 'POST') return res.status(405).end();
//     try {
//         const {
//             user: { email, firstName, lastName, password, id },
//         } = req.body;

//         const existingUser = await prismadb.user.findUnique({
//             where: { email },
//         });
//         if (existingUser) return res.status(422).json({ message: 'Email taken' });

//         const hashedPassword = await bcrypt.hash(password, 12);

//         const newUser = await prismadb.user.create({
//             data: { id, email, firstName, lastName, hashedPassword },
//         });

//         console.log(firstName, lastName, email, password, id);
//         return res.status(200).json({ user: newUser });
//     } catch (error) {
//         console.log(error);
//         return res.status(400).end();
//     }
// }
