"use client";

import { SectionProps } from "@/types";
import { theme } from "antd";

export default function Section({ children, title, className }: SectionProps) {
    const { token } = theme.useToken();

    return (
        <section style={{ color: token.colorText }} className={`${className} ${title ? "pt-12" : ""}`}>
            {title && <h2 className="pb-6 text-center">{title}</h2>}
            {children}
        </section>
    );
}
