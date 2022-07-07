import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.NEXT_AUTH_GOOGLE_CLIENT_ID,
            clientSecret: process.env.NEXT_AUTH_GOOGLE_CLIENT_SECRET
        }),
        FacebookProvider({
            clientId: process.env.NEXT_AUTH_FACEBOOK_ID,
            clientSecret: process.env.NEXT_AUTH_FACEBOOK_SECRET
        })
    ],
    secret: process.env.NEXT_AUTH_SECRET
})