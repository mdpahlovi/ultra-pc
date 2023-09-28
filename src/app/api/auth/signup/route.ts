import { hash } from "bcryptjs";
import prisma from "@/helpers/prisma";
import type { NextRequest } from "next/server";
import nextResponse from "@/helpers/nextResponse";

export async function POST(req: NextRequest) {
    const { name, email, password } = await req.json();
    const hashedPassword = await hash(password, 12);

    const isExist = await prisma.user.findUnique({ where: { email } });
    if (isExist && isExist?.password) {
        return nextResponse({ status: false, message: "User Already Exists...!" }, 422);
    } else if (isExist && !isExist?.password) {
        await prisma.user.update({ where: { email }, data: { password: hashedPassword } });
        return nextResponse({ status: true, message: "User Created Successfully...!" }, 201);
    } else {
        await prisma.user.create({ data: { name, email, password: hashedPassword } });
        return nextResponse({ status: true, message: "User Created Successfully...!" }, 201);
    }
}
