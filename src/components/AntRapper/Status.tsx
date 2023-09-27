"use client";

import { Tag, theme } from "antd";

export default function Status({ status }: { status: string }) {
    const { token } = theme.useToken();

    return (
        <Tag color={status === "In Stock" ? token.colorSuccessText : token.colorErrorText} style={{ marginBlock: "16px" }}>
            {status}
        </Tag>
    );
}
