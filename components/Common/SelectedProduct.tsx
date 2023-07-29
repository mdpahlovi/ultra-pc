import { useAppSelector } from "@/redux/hooks";
import { Image } from "antd";

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
        return (
            <div style={{ marginTop: "16px", display: "flex", gap: "20px" }}>
                <Image src={product?.image} alt="" width={100} height={100} />
                <div>
                    <h3 style={{ marginBottom: "10px" }}>{product?.name}</h3>
                    <div style={{ marginBottom: "4px", height: "4px", background: "#000", width: "100%" }} />
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px" }}>
                        <span>Price: ${product?.price}</span>
                    </div>
                </div>
            </div>
        );
    }
}
