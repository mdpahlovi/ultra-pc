import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Provider from "@/layouts/Provider";

export const metadata: Metadata = {
    title: {
        default: "Ultra PC",
        template: "%s - Ultra PC",
    },
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: React.PropsWithChildren) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Provider>{children}</Provider>
            </body>
        </html>
    );
}
