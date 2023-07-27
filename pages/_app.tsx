import "@/styles/globals.css";
import type { AppProps } from "next/app";
import type { NextPageWithLayout } from "@/types";

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout = Component.getLayout ?? ((page) => page);

    return getLayout(<Component {...pageProps} />);
}
