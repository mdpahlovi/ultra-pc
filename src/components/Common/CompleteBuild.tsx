"use client";

import { Button, message } from "antd";
import useBuilderStore from "@/hooks/useBuilderStore";

export default function CompleteBuild() {
    const { removeAll, processor, motherboard, ram, psu, sdCard, monitor } = useBuilderStore();

    const handleComplete = () => {
        message.success("Build Successful");
        removeAll();
    };

    return (
        <Button
            type="primary"
            shape="round"
            disabled={!processor || !motherboard || !ram || !psu || !sdCard || !monitor}
            onClick={handleComplete}
        >
            Complete Build
        </Button>
    );
}
