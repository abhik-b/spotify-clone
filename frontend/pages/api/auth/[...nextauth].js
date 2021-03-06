import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from "./lib/mongo"

const getDomainWithoutSubdomain = url => {
    const urlParts = new URL(url).hostname.split('.');

    return urlParts
        .slice(0)
        .slice(-(urlParts.length === 4 ? 3 : 2))
        .join('.');
};

const useSecureCookies = process.env.NEXT_AUTH_URL.startsWith('https://');
const cookiePrefix = useSecureCookies ? '__Secure' : '';
const hostName = getDomainWithoutSubdomain(process.env.NEXT_AUTH_URL);


const cookies = {
    sessionToken:
    {
        name: `${cookiePrefix}-Spotify-Clone--next-auth.session-token`,
        options: {
            httpOnly: true,
            sameSite: 'lax',
            path: '/',
            secure: useSecureCookies,
            domain: hostName == 'localhost' ? hostName : '.' + hostName
            // add a . in front so that subdomains are included
            // all sites whose domain hostname matches the above will have same session
        },
    },
};





export default NextAuth({
    adapter: MongoDBAdapter(clientPromise),
    providers: [
        GoogleProvider({
            clientId: process.env.NEXT_AUTH_GOOGLE_ID,
            clientSecret: process.env.NEXT_AUTH_GOOGLE_SECRET,
        }),

    ],
    secret: process.env.NEXT_AUTH_SECRET,
    useSecureCookies,
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
    },
    cookies
})