import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Github from "next-auth/providers/github";
import { db } from "./db";

if (!process.env.GITHUB_CLIENT_ID || !process.env.GITHUB_CLIENT_SECRET) {
    throw new Error("GITHUB_ID and GITHUB_SECRET must be defined as environment variables");
}

interface login {
    email: string,
    password: string
}

const loginAuth = async (credentials: login) => {
    const find = await db.user.findFirst({ where: { email: credentials.email } })
    if (!find) throw new Error('user not found')

    // const comparePassword = compareSync(credentials.password, find.password)
    // if (!comparePassword) throw new Error('password mismatch')

    return find;
}

export const { signOut, signIn, handlers: { GET, POST }, auth } = NextAuth({
    providers: [
        Github({ clientId: process.env.GITHUB_CLIENT_ID, clientSecret: process.env.GITHUB_CLIENT_SECRET }),
        Credentials({
            async authorize(credentials) {
                try {
                    const user = await loginAuth({ email: String(credentials.email), password: String(credentials.password) })
                    return user;
                } catch (error) {
                    throw new Error('Authentication failed')
                }
            },
        })
    ],
    callbacks: {
        async signIn({ user, account, profile }) {
            if (account?.provider === 'github') {
                try {
                    if (!user.email) return false;

                    const find = await db.user.findFirst({ where: { email: user?.email } })

                    if (!find) {
                        const newUser = await db.user.create({
                            data: {
                                name: user?.name || 'user',
                                email: user?.email || 'user@example.com',
                                password: ''
                            }
                        })
                    }
                    return true;

                } catch (error) {
                    console.log((error as Error).message)
                    return false;
                }
            }
            return true;
        }
    }
})



