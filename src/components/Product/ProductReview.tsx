"use client";

import { Avatar, List } from "antd";
import type { IReview } from "@/types";

export default function ProductReview({ reviews }: { reviews: IReview[] }) {
    return (
        <List
            style={{ maxWidth: "768px", marginInline: "auto" }}
            itemLayout="horizontal"
            dataSource={reviews}
            renderItem={({ user, rating, comment }) => (
                <List.Item>
                    <List.Item.Meta
                        avatar={<Avatar src={user.image} />}
                        title={
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <span>{user.name}</span>
                                <span>{rating}</span>
                            </div>
                        }
                        description={comment}
                    />
                </List.Item>
            )}
        />
    );
}
