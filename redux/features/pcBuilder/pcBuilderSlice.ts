import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { IProduct } from "@/model/products/product.interface";

interface PcBuilderState {
    processor: IProduct | null;
    motherboard: IProduct | null;
    ram: IProduct | null;
    psu: IProduct | null;
    sdCard: IProduct | null;
    monitor: IProduct | null;
}

const initialState: PcBuilderState = {
    processor: null,
    motherboard: null,
    ram: null,
    psu: null,
    sdCard: null,
    monitor: null,
};

export const pcBuilderSlice = createSlice({
    name: "pcBuilder",
    initialState,
    reducers: {
        toggleProcessor: (state, action: PayloadAction<IProduct | null>) => {
            return { ...state, processor: action.payload };
        },
        toggleMotherboard: (state, action: PayloadAction<IProduct | null>) => {
            return { ...state, motherboard: action.payload };
        },
        toggleRam: (state, action: PayloadAction<IProduct | null>) => {
            return { ...state, ram: action.payload };
        },
        togglePsu: (state, action: PayloadAction<IProduct | null>) => {
            return { ...state, psu: action.payload };
        },
        toggleSdCard: (state, action: PayloadAction<IProduct | null>) => {
            return { ...state, sdCard: action.payload };
        },
        toggleMonitor: (state, action: PayloadAction<IProduct | null>) => {
            return { ...state, monitor: action.payload };
        },
        removeAll: () => {
            return { processor: null, motherboard: null, ram: null, psu: null, sdCard: null, monitor: null };
        },
    },
});

export const { toggleProcessor, toggleMotherboard, toggleRam, togglePsu, toggleSdCard, toggleMonitor, removeAll } = pcBuilderSlice.actions;

export const selectCount = (state: RootState) => state.pcBuilder;

export default pcBuilderSlice.reducer;
