import { Button } from "antd";
import { useRouter } from "next/router";
import { useAppDispatch } from "@/redux/hooks";
import type { IProduct } from "@/model/products/product.interface";
import type { ICategory } from "@/model/categories/category.interface";
import {
    toggleMonitor,
    toggleMotherboard,
    toggleProcessor,
    togglePsu,
    toggleRam,
    toggleSdCard,
} from "@/redux/features/pcBuilder/pcBuilderSlice";

export default function AddToBuilder({ product }: { product: IProduct }) {
    const { push } = useRouter();
    const dispatch = useAppDispatch();

    const addToBuilder = () => {
        switch ((product.category as ICategory).name) {
            case "CPU / Processor":
                dispatch(toggleProcessor(product));
                push("/pc-builder");
                break;
            case "Motherboard":
                dispatch(toggleMotherboard(product));
                push("/pc-builder");
                break;
            case "RAM":
                dispatch(toggleRam(product));
                push("/pc-builder");
                break;
            case "Power Supply Unit":
                dispatch(togglePsu(product));
                push("/pc-builder");
                break;
            case "Storage Device":
                dispatch(toggleSdCard(product));
                push("/pc-builder");
                break;
            case "Monitor":
                dispatch(toggleMonitor(product));
                push("/pc-builder");
                break;
        }
    };

    return (
        <Button size="large" shape="round" onClick={addToBuilder} style={{ backgroundColor: "black", color: "white" }} block>
            Add To Builder
        </Button>
    );
}
