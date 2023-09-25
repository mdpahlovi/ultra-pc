import { Schema, model, models } from "mongoose";
import type { IUser, UserModel } from "./user.interface";

const userSchema = new Schema<IUser>(
    {
        name: { type: String, required: true },
        image: { type: String, default: "https://rb.gy/wmst0" },
        email: { type: String, required: true, unique: true },
        password: { type: String },
        role: { type: String, required: true, default: "user" },
        provider: { type: String, required: true, default: "credentials" },
    },
    { timestamps: true, versionKey: false }
);

const User = models.user || model<IUser, UserModel>("user", userSchema);

export default User;
