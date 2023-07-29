import "@/styles/globals.css";
import type { AppProps } from "next/app";
import type { NextPageWithLayout } from "@/types";
import { Provider } from "react-redux";
import { store, persistor } from "@/redux/store";
import { SessionProvider } from "next-auth/react";
import { PersistGate } from "redux-persist/integration/react";

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

export default function App({ Component, pageProps: { session, ...pageProps } }: AppPropsWithLayout) {
    const getLayout = Component.getLayout ?? ((page) => page);

    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <SessionProvider session={session}>{getLayout(<Component {...pageProps} />)}</SessionProvider>
            </PersistGate>
        </Provider>
    );
}
