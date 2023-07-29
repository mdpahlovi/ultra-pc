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
        addProcessor: (state, action: PayloadAction<IProduct>) => {
            return { ...state, processor: action.payload };
        },
        addMotherboard: (state, action: PayloadAction<IProduct>) => {
            return { ...state, motherboard: action.payload };
        },
        addRam: (state, action: PayloadAction<IProduct>) => {
            return { ...state, ram: action.payload };
        },
        addPsu: (state, action: PayloadAction<IProduct>) => {
            return { ...state, psu: action.payload };
        },
        addSdCard: (state, action: PayloadAction<IProduct>) => {
            return { ...state, sdCard: action.payload };
        },
        addMonitor: (state, action: PayloadAction<IProduct>) => {
            return { ...state, monitor: action.payload };
        },
        removeAll: () => {
            return { processor: null, motherboard: null, ram: null, psu: null, sdCard: null, monitor: null };
        },
    },
});

export const { addProcessor, addMotherboard, addRam, addPsu, addSdCard, addMonitor, removeAll } = pcBuilderSlice.actions;

export const selectCount = (state: RootState) => state.pcBuilder;

export default pcBuilderSlice.reducer;
