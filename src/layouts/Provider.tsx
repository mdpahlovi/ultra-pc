"use client";

import { useMemo } from "react";
import themeConfig from "@/exports/theme";
import { ConfigProvider, theme } from "antd";
import { SessionProvider } from "next-auth/react";
import type Entity from "@ant-design/cssinjs/es/Cache";
import { useServerInsertedHTML } from "next/navigation";
import { createCache, extractStyle, StyleProvider } from "@ant-design/cssinjs";

export default function Provider({ children }: React.PropsWithChildren) {
    const { token } = theme.useToken();
    const cache = useMemo<Entity>(() => createCache(), []);
    useServerInsertedHTML(() => <style id="antd" dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }} />);

    return (
        <SessionProvider>
            <StyleProvider cache={cache} hashPriority="high">
                <ConfigProvider theme={themeConfig(token)}>{children} </ConfigProvider>
            </StyleProvider>
        </SessionProvider>
    );
}
