import type { Document, Model } from "mongoose";

export interface IUser extends Document {
    name: string;
    email: string;
    password?: string;
    image?: string;
    provider: string;
}

export type UserModel = Model<IUser, Record<string, unknown>>;
