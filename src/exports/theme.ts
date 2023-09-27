import type { ThemeConfig, GlobalToken, MappingAlgorithm } from "antd";

function themeConfig(token: GlobalToken, theme: string, themeValue: MappingAlgorithm): ThemeConfig {
    const themedColor = theme === "light" ? "#ffffff" : "#141414";

    return {
        token: {
            fontSize: 16,
            colorPrimary: "	#0B20E2",
        },
        components: {
            Layout: { headerBg: themedColor, footerBg: themedColor },
        },
        algorithm: themeValue,
    };
}

export default themeConfig;
