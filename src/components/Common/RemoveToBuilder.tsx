"use client";

import { Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import useBuilderStore from "@/hooks/useBuilderStore";

export default function RemoveToBuilder({ name }: { name: string }) {
    const { toggleMonitor, toggleMotherboard, toggleProcessor, togglePsu, toggleRam, toggleSdCard } = useBuilderStore();

    const removeToBuilder = () => {
        switch (name) {
            case "CPU / Processor":
                toggleProcessor(null);
                break;
            case "Motherboard":
                toggleMotherboard(null);
                break;
            case "RAM":
                toggleRam(null);
                break;
            case "Power Supply Unit":
                togglePsu(null);
                break;
            case "Storage Device":
                toggleSdCard(null);
                break;
            case "Monitor":
                toggleMonitor(null);
                break;
        }
    };

    return (
        <>
            <Button onClick={removeToBuilder} type="primary" shape="circle" className="hidden sm:block" danger>
                <CloseOutlined />
            </Button>
            <Button onClick={removeToBuilder} type="primary" shape="round" className="sm:hidden" danger>
                Remove
            </Button>
        </>
    );
}
