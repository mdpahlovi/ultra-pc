import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Badge, Button, Card, Tag } from "antd";
import calculateAverage from "@/helpers/calculateAverage";
import { IProduct } from "@/model/products/product.interface";
import { ICategory } from "@/model/categories/category.interface";

export default function ProductCard({ product }: { product: IProduct }) {
    const { _id, name, image, category, price, status, reviews } = product;

    let rating;
    if (reviews.length === 0) {
        rating = 0;
    } else {
        rating = calculateAverage(reviews.map((review) => review.rating));
    }

    return (
        <Badge.Ribbon text={(category as ICategory).name}>
            <Card bordered={false} cover={<Image src={image} alt="" width={448} height={256} />}>
                <h3 style={{ marginBottom: "10px" }}>{name}</h3>
                <div style={{ marginBottom: "4px", height: "4px", background: "#000", width: "100%" }} />
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px" }}>
                    <span>Price: ${price}</span>
                    <span>Rating: {rating}</span>
                </div>
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
