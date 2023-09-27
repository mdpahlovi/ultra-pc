"use client";

import { Button } from "antd";
import { useRouter } from "next/navigation";
import useBuilderStore from "@/hooks/useBuilderStore";
import type { IProduct } from "@/model/products/product.interface";
import type { ICategory } from "@/model/categories/category.interface";

export default function AddToBuilder({ product }: { product: IProduct }) {
    const router = useRouter();
    const { toggleMonitor, toggleMotherboard, toggleProcessor, togglePsu, toggleRam, toggleSdCard } = useBuilderStore();

    const addToBuilder = () => {
        switch ((product.category as ICategory).name) {
            case "CPU / Processor":
                toggleProcessor(product);
                router.push("/pc-builder");
                break;
            case "Motherboard":
                toggleMotherboard(product);
                router.push("/pc-builder");
                break;
            case "RAM":
                toggleRam(product);
                router.push("/pc-builder");
                break;
            case "Power Supply Unit":
                togglePsu(product);
                router.push("/pc-builder");
                break;
            case "Storage Device":
                toggleSdCard(product);
                router.push("/pc-builder");
                break;
            case "Monitor":
                toggleMonitor(product);
                router.push("/pc-builder");
                break;
        }
    };

    return (
        <Button shape="round" onClick={addToBuilder} style={{ backgroundColor: "black", color: "white" }} block>
            Add To Builder
        </Button>
    );
}
