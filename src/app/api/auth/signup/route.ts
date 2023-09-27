import { hash } from "bcryptjs";
import User from "@/model/users/user";
import connection from "@/helpers/connection";
import type { NextRequest } from "next/server";
import nextResponse from "@/helpers/nextResponse";

export async function POST(req: NextRequest) {
    await connection();
    const { name, email, password } = await req.json();
    const hashedPassword = await hash(password, 12);

    const isExist = await User.findOne({ email });
    if (isExist && isExist?.password) {
        return nextResponse({ status: false, message: "User Already Exists...!" }, 422);
    } else if (isExist && !isExist?.password) {
        await User.findOneAndUpdate({ email }, { password: hashedPassword }, { new: true });
        return nextResponse({ status: true, message: "User Created Successfully...!" }, 201);
    } else {
        await new User({ name, email, password: hashedPassword }).save();
        return nextResponse({ status: true, message: "User Created Successfully...!" }, 201);
    }
}
