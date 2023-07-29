import { Button } from "antd";
import type { IProduct } from "@/model/products/product.interface";
import type { ICategory } from "@/model/categories/category.interface";
import { useAppDispatch } from "@/redux/hooks";
import { addMonitor, addMotherboard, addProcessor, addPsu, addRam, addSdCard } from "@/redux/features/pcBuilder/pcBuilderSlice";
import { useRouter } from "next/router";

export default function AddToBuilder({ product }: { product: IProduct }) {
    const { push } = useRouter();
    const dispatch = useAppDispatch();

    const addToBuilder = () => {
        switch ((product.category as ICategory).name) {
            case "CPU / Processor":
                dispatch(addProcessor(product));
                push("/pc-builder");
                break;
            case "Motherboard":
                dispatch(addMotherboard(product));
                push("/pc-builder");
                break;
            case "RAM":
                dispatch(addRam(product));
                push("/pc-builder");
                break;
            case "Power Supply Unit":
                dispatch(addPsu(product));
                push("/pc-builder");
                break;
            case "Storage Device":
                dispatch(addSdCard(product));
                push("/pc-builder");
                break;
            case "Monitor":
                dispatch(addMonitor(product));
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
