import nextResponse from "@/helpers/nextResponse";
import prisma from "@/helpers/prisma";

export async function GET() {
    const result = await prisma.category.findMany({ select: { id: true, name: true } });

    if (!result) throw new Error("Failed to fetch data");

    return nextResponse(result, 201);
}
