import { NextResponse } from "next/server";

const nextResponse = <T>(body: T, status: number) => {
    return new NextResponse(JSON.stringify(body), {
        status: status,
        headers: { "Content-Type": "application/json" },
    });
};

export default nextResponse;
