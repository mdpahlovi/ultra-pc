"use client";

import { useMemo } from "react";
import themeConfig from "@/exports/theme";
import { ConfigProvider, theme as antdTheme } from "antd";
import { SessionProvider } from "next-auth/react";
import useThemeStore from "@/hooks/useThemeStore";
import type Entity from "@ant-design/cssinjs/es/Cache";
import { useServerInsertedHTML } from "next/navigation";
import { createCache, extractStyle, StyleProvider } from "@ant-design/cssinjs";

export default function Provider({ children }: React.PropsWithChildren) {
    const { token } = antdTheme.useToken();
    const { theme, themeValue } = useThemeStore();
    const cache = useMemo<Entity>(() => createCache(), []);
    useServerInsertedHTML(() => <style id="antd" dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }} />);

    return (
        <SessionProvider>
            <StyleProvider cache={cache} hashPriority="high">
                <ConfigProvider theme={themeConfig(token, theme, themeValue)}>{children} </ConfigProvider>
            </StyleProvider>
        </SessionProvider>
    );
}
