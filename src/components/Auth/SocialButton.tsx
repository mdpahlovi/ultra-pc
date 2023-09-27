"use client";

import { Button } from "antd";
import { signIn } from "next-auth/react";
import type { SocialButtonProps } from "@/types";

export default function SocialButton({ provider, children }: SocialButtonProps) {
    return (
        <Button shape="round" size="large" onClick={() => signIn(provider, { callbackUrl: "/" })} ghost>
            {children}
        </Button>
    );
}
