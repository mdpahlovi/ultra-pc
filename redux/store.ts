import { configureStore } from "@reduxjs/toolkit";
import pcBuildersReducer from "./features/pcBuilder/pcBuilderSlice";

export const store = configureStore({
    reducer: {
        pcBuilder: pcBuildersReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
