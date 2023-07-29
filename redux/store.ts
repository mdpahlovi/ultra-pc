import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import pcBuildersReducer from "./features/pcBuilder/pcBuilderSlice";

const persistConfig = { key: "root", storage };
const persistedReducer = persistReducer(persistConfig, pcBuildersReducer);

export const store = configureStore({
    reducer: {
        pcBuilder: persistedReducer,
    },
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
