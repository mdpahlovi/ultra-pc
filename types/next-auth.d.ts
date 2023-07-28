import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";
import { IUser } from "@/model/user.interface";

declare module "next-auth" {
    interface Session {
        user: IUser;
    }
    interface Profile {
        picture: string | undefined;
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        user: IUser;
    }
}
