import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Badge, Button, Card, Tag } from "antd";

import { IProduct } from "@/model/products/product.interface";
import calculateAverage from "@/helpers/calculateAverage";

export default function ProductCard({ product }: { product: IProduct }) {
    const { _id, name, image, category, price, status, reviews } = product;

    let rating;
    if (reviews.length === 0) {
        rating = 0;
    } else {
        rating = calculateAverage(reviews.map((review) => review.rating));
    }

    return (
        <Badge.Ribbon text={"Test"}>
            <Card
                bordered={false}
                style={{ display: "flex", flexDirection: "column", gap: "20px" }}
                cover={<Image src={image} alt="" width={448} height={256} />}
            >
                <Card.Meta title={name} style={{ marginBottom: "10px" }} />
                <div style={{ marginBottom: "4px", height: "4px", background: "#000", width: "100%" }} />
                <p style={{ display: "flex", justifyContent: "space-between", width: "100%", fontSize: "14px" }}>
                    <span>Price: ${price}</span>
                    <span>Rating: {rating}</span>
                </p>
                <Tag color={status === "In Stock" ? "#87d068" : "#f50"} style={{ margin: "10px 0 16px" }}>
                    {status}
                </Tag>
                <Link href={_id} style={{ display: "block" }}>
                    <Button size="large" shape="round" style={{ backgroundColor: "black", color: "white" }} block>
                        See Details
                    </Button>
                </Link>
            </Card>
        </Badge.Ribbon>
    );
}
