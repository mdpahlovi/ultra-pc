import { compare } from "bcryptjs";
import prisma from "@/helpers/prisma";
import { encode } from "next-auth/jwt";
import { Provider } from "@prisma/client";
import type { NextAuthOptions } from "next-auth";
import GithubProvider, { type GithubProfile } from "next-auth/providers/github";
import GoogleProvider, { type GoogleProfile } from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

const options: NextAuthOptions = {
    providers: [
        GithubProvider({
            profile(profile: GithubProfile) {
                return {
                    id: profile.id.toString(),
                    name: profile.name ?? profile.login,
                    image: profile.avatar_url,
                    email: profile.email,
                    role: profile.role ?? "user",
                };
            },
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        GoogleProvider({
            profile(profile: GoogleProfile) {
                return {
                    id: profile.sub,
                    name: profile.name,
                    image: profile.picture,
                    email: profile.email,
                    role: profile.role ?? "user",
                };
            },
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        CredentialsProvider({
            type: "credentials",
            credentials: {},
            async authorize(credentials, req) {
                const { email, password } = credentials as { email: string; password: string };

                const user = await prisma.user.findUnique({ where: { email } });
                if (!user) throw new Error("User Not Found...!");

                const isPasswordMatch = await compare(password, user.password!);
                if (!isPasswordMatch) throw new Error("Password doesn't match...!");

                return user;
            },
        }),
    ],
    pages: {
        signIn: "/login",
    },
    callbacks: {
        async signIn({ user, account }) {
            if (account?.type === "oauth") {
                const payload = { name: user?.name!, email: user?.email!, image: user?.image!, provider: account.provider as Provider };

                let auth = await prisma.user.findUnique({ where: { email: user?.email! } });
                if (!auth) auth = await prisma.user.create({ data: payload });

                user.id = auth.id;
                return true;
            }

            return true;
        },
        async jwt({ token, user }) {
            if (user) token.role = user.role;
            return token;
        },
        async session({ session, token }) {
            const secret = process.env.NEXTAUTH_SECRET;
            session.token = await encode({ token, secret });
            if (session?.user) session.user.role = token.role;
            return session;
        },
    },
};

export default options;
