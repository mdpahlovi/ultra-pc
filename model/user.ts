import { Schema, model, models } from "mongoose";
import { IUser, UserModel } from "./user.interface";

const userSchema = new Schema<IUser>(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: String,
        image: String,
        provider: { type: String, default: "credentials" },
    },
    { timestamps: true, versionKey: false }
);

const User = models.user || model<IUser, UserModel>("user", userSchema);

export default User;
