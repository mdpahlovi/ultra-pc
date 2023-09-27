"use client";

import { Switch } from "antd";
import useThemeStore from "@/hooks/useThemeStore";

export default function ThemeToggle() {
    const { theme, toggleTheme } = useThemeStore();
    const handleClick = () => (theme === "light" ? toggleTheme("dark") : toggleTheme("light"));

    return <Switch onClick={handleClick} checked={theme === "dark"} checkedChildren="Dark" unCheckedChildren="Light" />;
}
