import User from "@/model/user";
import NextAuth from "next-auth";
import { compare } from "bcryptjs";
import connectMongo from "@/database/connection";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        CredentialsProvider({
            type: "credentials",
            credentials: {},
            async authorize(credentials, req) {
                connectMongo();

                const { email, password } = credentials as { email: string; password: string };

                const user = await User.findOne({ email: email });
                if (!user) {
                    throw new Error("User Not Found...!");
                }

                const checkPassword = await compare(password, user.password);
                if (!checkPassword) {
                    throw new Error("Password doesn't match...!");
                }

                return user;
            },
        }),
    ],
    pages: {
        signIn: "/login",
    },
    callbacks: {
        async signIn({ account, profile }) {
            if (account?.type === "oauth") {
                connectMongo();

                const user = await User.findOne({ email: profile?.email });
                if (user?._id) {
                    return true;
                } else {
                    const newUser = new User({
                        name: profile?.name,
                        email: profile?.email,
                        image: profile?.picture,
                        provider: account.provider,
                    });

                    await newUser.save();
                    return true;
                }
            }

            return true;
        },
        async jwt({ token }) {
            connectMongo();

            const user = await User.findOne({ email: token.email }).select("-password");
            if (!user) throw new Error("User Not Found...!");

            token.user = user;
            return token;
        },
        async session({ session, token }) {
            session.user = token.user;
            return session;
        },
    },
});
