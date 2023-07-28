import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

interface PcBuilderState {
    value: number;
}

const initialState: PcBuilderState = {
    value: 0,
};

export const pcBuilderSlice = createSlice({
    name: "pcBuilder",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        // Use the PayloadAction type to declare the contents of `action.payload`
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },
    },
});

export const { increment, decrement, incrementByAmount } = pcBuilderSlice.actions;

export const selectCount = (state: RootState) => state.pcBuilder.value;

export default pcBuilderSlice.reducer;
