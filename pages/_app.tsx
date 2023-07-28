import "@/styles/globals.css";
import type { AppProps } from "next/app";
import type { NextPageWithLayout } from "@/types";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

export default function App({ Component, pageProps: { session, ...pageProps } }: AppPropsWithLayout) {
    const getLayout = Component.getLayout ?? ((page) => page);

    return (
        <Provider store={store}>
            <SessionProvider session={session}>{getLayout(<Component {...pageProps} />)}</SessionProvider>
        </Provider>
    );
}
