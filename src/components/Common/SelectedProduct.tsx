"use client";

import Image from "next/image";
import InfoText from "./InfoText";
import RemoveToBuilder from "./RemoveToBuilder";
import useBuilderStore from "@/hooks/useBuilderStore";
import type { ICategory } from "@/model/categories/category.interface";

export default function SelectedProduct({ name }: { name: string }) {
    const { processor, motherboard, ram, psu, sdCard, monitor } = useBuilderStore();

    let product;
    switch (name) {
        case "CPU / Processor":
            product = processor;
            break;
        case "Motherboard":
            product = motherboard;
            break;
        case "RAM":
            product = ram;
            break;
        case "Power Supply Unit":
            product = psu;
            break;
        case "Storage Device":
            product = sdCard;
            break;
        case "Monitor":
            product = monitor;
            break;
    }

    if (product) {
        const { image, name, category, price, reviews } = product;

        return (
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
                <Image src={image} alt="" width={100} height={100} />
                <div>
                    <h3 className="mb-1.5">{name}</h3>
                    <InfoText price={price} reviews={reviews} />
                </div>
                <RemoveToBuilder name={(category as ICategory).name} />
            </div>
        );
    }
}
