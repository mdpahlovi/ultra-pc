import { IProduct } from "@/model/products/product.interface";

export type BuilderState = {
    processor: IProduct | null;
    motherboard: IProduct | null;
    ram: IProduct | null;
    psu: IProduct | null;
    sdCard: IProduct | null;
    monitor: IProduct | null;
    toggleProcessor: (payload: IProduct | null) => void;
    toggleMotherboard: (payload: IProduct | null) => void;
    toggleRam: (payload: IProduct | null) => void;
    togglePsu: (payload: IProduct | null) => void;
    toggleSdCard: (payload: IProduct | null) => void;
    toggleMonitor: (payload: IProduct | null) => void;
    removeAll: () => void;
};
