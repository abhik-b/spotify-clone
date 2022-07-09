import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"


export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.NEXT_AUTH_GOOGLE_ID,
            clientSecret: process.env.NEXT_AUTH_GOOGLE_SECRET,
        }),

    ],
    secret: process.env.NEXT_AUTH_SECRET,
    session: { strategy: 'jwt' },
    callbacks: {
        async jwt({ token, account, user }) {
            if (account) {
                token.accessToken = account.id_token
            }
            return token
        },
        async session({ session, user, token }) {
            session.accessToken = token.accessToken
            return session
        }
    }
})