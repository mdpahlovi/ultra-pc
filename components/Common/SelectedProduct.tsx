import Image from "next/image";
import InfoText from "./InfoText";
import { useAppSelector } from "@/redux/hooks";

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
        const { image, name, price, reviews } = product;

        return (
            <div style={{ marginTop: "16px", display: "flex", gap: "20px" }}>
                <Image src={image} alt="" width={100} height={100} />
                <div>
                    <h3 style={{ marginBottom: "10px" }}>{name}</h3>
                    <InfoText price={price} reviews={reviews} />
                </div>
            </div>
        );
    }
}
