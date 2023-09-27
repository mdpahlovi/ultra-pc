import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import type { BuilderState } from "@/types/zustand";

const initialState = { processor: null, motherboard: null, ram: null, psu: null, sdCard: null, monitor: null };

const useBuilderStore = create<BuilderState>()(
    devtools(
        persist(
            set => ({
                ...initialState,
                toggleProcessor: payload => set({ processor: payload }),
                toggleMotherboard: payload => set({ motherboard: payload }),
                toggleRam: payload => set({ ram: payload }),
                togglePsu: payload => set({ psu: payload }),
                toggleSdCard: payload => set({ sdCard: payload }),
                toggleMonitor: payload => set({ monitor: payload }),
                removeAll: () => set(initialState),
            }),
            { name: "builder-storage" },
        ),
    ),
);

export default useBuilderStore;
