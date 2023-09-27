"use client";

import { Avatar, List } from "antd";
import { IUser } from "@/model/users/user.interface";
import { IReviews } from "@/model/products/product.interface";

export default function ProductReview({ reviews }: { reviews: IReviews[] }) {
    return (
        <List
            style={{ maxWidth: "768px", marginInline: "auto" }}
            itemLayout="horizontal"
            dataSource={reviews}
            renderItem={({ user, rating, comment }) => (
                <List.Item>
                    <List.Item.Meta
                        avatar={<Avatar src={(user as IUser)?.image} />}
                        title={
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <span>{(user as IUser)?.name}</span>
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
