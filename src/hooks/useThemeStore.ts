import { theme } from "antd";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import type { ThemeState } from "@/types/zustand";

const initialState = { theme: "light", themeValue: theme.defaultAlgorithm };

const useThemeStore = create<ThemeState>()(
    devtools(
        persist(
            set => ({
                ...initialState,
                toggleTheme: payload =>
                    set({ theme: payload, themeValue: payload === "light" ? theme.defaultAlgorithm : theme.darkAlgorithm }),
            }),
            { name: "theme-storage" },
        ),
    ),
);

export default useThemeStore;
