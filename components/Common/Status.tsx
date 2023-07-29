import { Tag } from "antd";

export default function Status({ status }: { status: string }) {
    return (
        <Tag color={status === "In Stock" ? "#87d068" : "#f50"} style={{ marginBlock: "16px" }}>
            {status}
        </Tag>
    );
}
