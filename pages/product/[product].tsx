import Image from "next/image";
import Main from "@/layouts/Main";
import { Avatar, Badge, List, Tag } from "antd";
import type { ReactElement } from "react";
import type { GetStaticPaths, GetStaticProps } from "next";
import calculateAverage from "@/helpers/calculateAverage";
import type { IProduct } from "@/model/products/product.interface";
import type { ICategory } from "@/model/categories/category.interface";
import styles from "@/styles/Product.module.css";
import { IUser } from "@/model/users/user.interface";

export default function ProductDetails({ product }: { product: IProduct }) {
    const { _id, name, image, category, price, status, description, keyFeature, reviews } = product;

    let rating;
    if (reviews.length === 0) {
        rating = 0;
    } else {
        rating = calculateAverage(reviews.map((review) => review.rating));
    }

    return (
        <>
            <div className={styles.containerFluid}>
                <Badge.Ribbon text={(category as ICategory).name}>
                    <Image src={image} alt="" width={448} height={256} />
                </Badge.Ribbon>
                <div>
                    <h2 style={{ marginBottom: "14px" }}>{name}</h2>
                    <div style={{ marginBottom: "4px", height: "4px", background: "#000", width: "100%" }} />
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px" }}>
                        <span>Price: ${price}</span>
                        <span>
                            Rating: {rating} ({reviews.length})
                        </span>
                    </div>
                    <Tag color={status === "In Stock" ? "#87d068" : "#f50"} style={{ margin: "16px 0" }}>
                        {status}
                    </Tag>
                    <p>{description}</p>
                    <div style={{ marginTop: "16px", display: "flex", flexDirection: "column", gap: "4px" }}>
                        <h4>Key Feature : </h4>
                        {keyFeature?.length && keyFeature.map((feature, idx) => <p key={idx}>{feature}</p>)}
                    </div>
                </div>
            </div>
            <div style={{ paddingTop: "50px" }}>
                <h2 style={{ marginBottom: "20px", textAlign: "center" }}>Reviews</h2>
                <List
                    style={{ maxWidth: "768px", margin: "0 auto" }}
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
            </div>
        </>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await fetch("https://ultra-pc-server.vercel.app/api/product");
    const products = await res.json();

    const paths = products.map((product: IProduct) => ({
        params: { product: product?._id },
    }));

    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const res = await fetch(`https://ultra-pc-server.vercel.app/api/product/${params?.product}`);
    const product = await res.json();

    return { props: { product } };
};

ProductDetails.getLayout = function getLayout(page: ReactElement) {
    return (
        <Main title="Product - Ultra Pc" className="">
            {page}
        </Main>
    );
};
