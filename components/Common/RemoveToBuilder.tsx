import { Button } from "antd";
import { useAppDispatch } from "@/redux/hooks";
import { CloseOutlined } from "@ant-design/icons";
import {
    toggleMonitor,
    toggleMotherboard,
    toggleProcessor,
    togglePsu,
    toggleRam,
    toggleSdCard,
} from "@/redux/features/pcBuilder/pcBuilderSlice";

export default function RemoveToBuilder({ name }: { name: string }) {
    const dispatch = useAppDispatch();

    const removeToBuilder = () => {
        switch (name) {
            case "CPU / Processor":
                dispatch(toggleProcessor(null));
                break;
            case "Motherboard":
                dispatch(toggleMotherboard(null));
                break;
            case "RAM":
                dispatch(toggleRam(null));
                break;
            case "Power Supply Unit":
                dispatch(togglePsu(null));
                break;
            case "Storage Device":
                dispatch(toggleSdCard(null));
                break;
            case "Monitor":
                dispatch(toggleMonitor(null));
                break;
        }
    };

    return (
        <Button onClick={removeToBuilder} type="primary" size="large" shape="circle" danger>
            <CloseOutlined />
        </Button>
    );
}
