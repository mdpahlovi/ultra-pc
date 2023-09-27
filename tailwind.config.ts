/** @type {import('tailwindcss').Config} */
import { Config } from "tailwindcss";

const config: Config = {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: { extend: {} },
    plugins: [],
    corePlugins: { preflight: false },
    important: true,
};

export default config;
