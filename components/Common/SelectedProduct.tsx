import Image from "next/image";
import InfoText from "./InfoText";
import { useAppSelector } from "@/redux/hooks";
import styles from "@/styles/PCBuilder.module.css";
import RemoveToBuilder from "./RemoveToBuilder";
import type { ICategory } from "@/model/categories/category.interface";

export default function SelectedProduct({ name }: { name: string }) {
    const { processor, motherboard, ram, psu, sdCard, monitor } = useAppSelector((state) => state.pcBuilder);

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
            <div className={styles.selectProduct}>
                <Image src={image} alt="" width={100} height={100} />
                <div className={styles.selectProductDetails}>
                    <h3 style={{ marginBottom: "10px" }}>{name}</h3>
                    <InfoText price={price} reviews={reviews} />
                </div>
                <RemoveToBuilder name={(category as ICategory).name} />
            </div>
        );
    }
}
