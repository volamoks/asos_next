import { getSession } from 'next-auth/react';
import { useActions } from './../../../hooks/combineActions';
import { useAppSelector } from './../../../hooks/typedHooks';
import NextAuth from 'next-auth/next';
import Credentials from 'next-auth/providers/credentials';
import prismadb from '../../../../lib/prismadb';
import { compare } from 'bcrypt';
import { PrismaAdapter } from '@next-auth/prisma-adapter';

export default NextAuth({
    providers: [
        Credentials({
            id: 'credentials',
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'text' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error('Password or email is not provided');
                }

                const user = await prismadb.user.findUnique({
                    where: {
                        email: credentials.email,
                    },
                });

                if (!user || !user.hashedPassword) {
                    throw new Error('User not found');
                }

                const isCorrectPassword = await compare(credentials.password, user.hashedPassword);

                if (!isCorrectPassword) {
                    throw new Error('Incorrect password');
                }

                return user;
            },
        }),
    ],
    pages: {
        signIn: '/register',
    },
    debug: process.env.NODE_ENV === 'development',
    session: {
        strategy: 'jwt',
    },
    jwt: {
        secret: process.env.NEXTAUTH_JWT_SECRET,
    },
    secret: process.env.NEXTAUTH_SECRET,
});
