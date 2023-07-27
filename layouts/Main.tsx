import Head from "next/head";
import type { ReactNode } from "react";

export default function Main({ children, title }: { children: ReactNode; title: string }) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>Navbar</div>
            {children}
            <div>Footer</div>
        </>
    );
}
