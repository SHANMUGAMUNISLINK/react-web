import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
let secret: any = process.env.NEXTAUTH_SECRET;

const login = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: 'Username', type: 'text' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials:any) {
                if (
                    credentials?.username === 'shanmugam' &&
                    credentials?.password === 'Shanmugam@1997'
                ) {
                    return { id: '1', name: 'Shanmugam', email: 'shanmugam@unislink.com' };
                }
                return null;
            },
        }),
    ],
    secret: secret,
    pages: {
        signIn: '/auth/signin',
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.email = user.email;
            }
            return token;
        },
        async session({ session, token }: any) {
            if (token) {
                session.user.id = token.id;
                session.user.email = token.email;
            }
            return session;
        },
    },
});
export default login;