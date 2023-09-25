import type { Document, Model } from "mongoose";

export interface IUser extends Document {
    name: string;
    image: string;
    email: string;
    password: string;
    role: "user" | "admin";
    provider: "google" | "github" | "credentials";
}

export type UserModel = Model<IUser, Record<string, unknown>>;
