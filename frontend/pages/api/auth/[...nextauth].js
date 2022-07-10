import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from "./lib/mongo"
export default NextAuth({
    adapter: MongoDBAdapter(clientPromise),
    providers: [
        GoogleProvider({
            clientId: process.env.NEXT_AUTH_GOOGLE_ID,
            clientSecret: process.env.NEXT_AUTH_GOOGLE_SECRET,
        }),

    ],
    secret: process.env.NEXT_AUTH_SECRET,
    session: { strategy: 'jwt' },
    pages: {
        'newUser': '/profile',
    },
    callbacks: {
        async jwt({ token, account }) {
            if (account) {
                token.accessToken = account.id_token
            }
            return token
        },
        async session({ session, token }) {
            session.accessToken = token.accessToken
            return session
        }
    }
})