import { theme, type ThemeConfig, GlobalToken } from "antd";

function themeConfig(token: GlobalToken): ThemeConfig {
    return {
        token: {
            fontSize: 16,
            colorPrimary: "	#0B20E2",
        },
        components: {
            Layout: { headerBg: token.colorFill, footerBg: token.colorFill },
        },
        algorithm: [theme.defaultAlgorithm],
    };
}

export default themeConfig;
